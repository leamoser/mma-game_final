import { calculateDuration } from '../modules/calculateDuration.js';
import { updateCockpit } from '../modules/updateCockpit.js';
import { initCockpit } from '../modules/initCockpit.js';
import { checkGoal } from '../modules/checkGoal.js';


// wird bei jedem Spielzug ausgeführt
// Cockpit befüllen

// Variablen
const placeStartContainer = document.querySelector('#placeStartInfo');
const durationContainer = document.querySelector('#journeyDuration');;

// Funktionen
let displayJourneyInfo = (placeStart, placeEnd, gametype, time, nthMove) => {
    // Wenn Spiel neu gestartet wird, wird placestart und placeend befüllt
    if (nthMove === 0) {
        initCockpit(time, placeStart, placeEnd);
    } else if (nthMove > 0) {
        //Bei jedem Spielzug wird 'Deine Reise' erweitert (ausser beim ersten Spielzug)
        updateCockpit(placeStart);
    }

    // Im Freeplay Modus wird Zeit unterwegs berechnet
    if (gametype === 0) {
        durationContainer.innerHTML = calculateDuration(time, placeStartContainer);
    }

    // Abfrage, ob Ziel erreicht
    checkGoal(placeStart, placeEnd, gametype, time, nthMove);

}
export { displayJourneyInfo };