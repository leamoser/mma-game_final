import { calculateDuration } from '../modules/calculateDuration.js';
import { updateCockpit } from '../modules/updateCockpit.js';
import { initCockpit } from '../modules/initCockpit.js';
import { checkGoal } from '../modules/checkGoal.js';
import { toggleLayerButtons } from '../modules/toggleLayerButtons.js';
import { nthMove } from './fetchPlace.js';


// wird bei jedem Spielzug ausgeführt
// Cockpit befüllen

// Variablen
const placeStartContainer = document.querySelector('#placeStartInfo');
const durationContainer = document.querySelector('#journeyDuration');

// Funktionen
let displayJourneyInfo = (placeStart, placeEnd, gametype, time, move) => {

    // Wenn Spiel neu gestartet wird, wird placestart und placeend befüllt
    if (move === 0) {
        initCockpit(time, placeStart, placeEnd);
    } else if (move > 0) {
        //Bei jedem Spielzug wird 'Deine Reise' erweitert (ausser beim ersten Spielzug)
        updateCockpit(time, placeStart);
    }

    // Abfrage, ob Ziel erreicht
    checkGoal(placeStart, placeEnd, gametype, time, move);

    // Im Freeplay Modus wird Zeit unterwegs berechnet
    if (gametype === 0) {
        durationContainer.innerHTML = calculateDuration(time, placeStartContainer);
    }

    // im Level Modus werden Buttons für Map Layers
    if(gametype === '7'){
        toggleLayerButtons(1, 2, 3, move);
    }
    if(gametype === '11'){
        toggleLayerButtons(2, 4, 6, move);
    }
    if(gametype === '15'){
        toggleLayerButtons(3, 6, 9, move);
    }




}
export { displayJourneyInfo };