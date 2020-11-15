//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { calculateDuration } from '../modules/calculateDuration.js';
import { updateCockpit } from '../modules/updateCockpit.js';
import { initCockpit } from '../modules/initCockpit.js';
import { checkGoal } from '../modules/checkGoal.js';
import { toggleLayerButtons } from '../modules/toggleLayerButtons.js';
import { nthMove, gametype } from './fetchPlace.js';


//-----------------------------------------------------------------
//ERKKÄRUNGEN------------------------------------------------------
// wird bei jedem Spielzug ausgeführt
// Cockpit befüllen


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const placeStartContainer = document.querySelector('#placeStartInfo');
const durationContainer = document.querySelector('#journeyDuration');
const availableMovesContainer = document.querySelector('#availableMoves');
const countetMovesContainer = document.querySelector('#counterMoves');


//-----------------------------------------------------------------
//FUNKTION---------------------------------------------------------
let displayJourneyInfo = (placeStart, placeEnd, time) => {
    // Wenn Spiel neu gestartet wird, wird placestart und placeend befüllt
    if (nthMove === 0) {
        initCockpit(time, placeStart, placeEnd, gametype);
    } else if (nthMove > 0) {
        //Bei jedem Spielzug wird 'Deine Reise' erweitert (ausser beim ersten Spielzug)
        updateCockpit(placeStart);
    }
    // Abfrage, ob Ziel erreicht
    checkGoal(placeStart, placeEnd, gametype, time, nthMove);
    // Im Freeplay Modus wird Zeit unterwegs berechnet
    // Im Level Modus wird die Anzahl Moves angezeigt
    if (gametype === 0) {
        durationContainer.innerHTML = calculateDuration(time, placeStartContainer);
        toggleLayerButtons(0, 0, 0, nthMove);
    } else {
        if (nthMove == 1) {
            countetMovesContainer.innerHTML = nthMove + ' Zug';
        } else {
            countetMovesContainer.innerHTML = nthMove + ' Zügen';
        }
        availableMovesContainer.innerHTML = (gametype - nthMove);
    }
    // im Level Modus werden Buttons für Map Layers
    if (gametype === '7') {
        toggleLayerButtons(1, 2, 3, nthMove);
    }
    if (gametype === '11') {
        toggleLayerButtons(2, 4, 6, nthMove);
    }
    if (gametype === '15') {
        toggleLayerButtons(3, 6, 9, nthMove);
    }
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { displayJourneyInfo };