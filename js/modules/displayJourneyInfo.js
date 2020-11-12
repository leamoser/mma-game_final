import { calculateDuration } from '../modules/calculateDuration.js';

const stationsContainer = document.querySelector('#placeCurrentInfo');
const placeStartContainer = document.querySelector('#placeStartInfo');
const placeEndContainer = document.querySelector('#placeEndInfo');
const durationContainer = document.querySelector('#journeyDuration');
const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');
const freeGameWonContainer = document.querySelector('#ct_freeGameWon');


let displayJourneyInfo = (time, placeStart, gametype) => {
    if (stationsContainer.innerHTML == '') {
        placeStartContainer.innerHTML = placeStart;
        placeStartContainer.setAttribute('data-time', time);
        placeEndContainer.innerHTML = document.querySelector('#placeEnd').innerHTML;
        stationsContainer.innerHTML = 'Deine Reise: ';
    } else {
        stationsContainer.innerHTML += placeStart + ',' + time + ')' + ', ';
    }
    if (durationContainer != null) {
        durationContainer.innerHTML = calculateDuration(time, placeStartContainer);
    }

    if (placeStart == (document.querySelector('#placeEnd').innerHTML)) {
        if (gametype === 1) {               // im levelplay modus
            gameWonContainer.classList.remove('hide');
        } else if (gametype === 0) {        // im freeplay modus
            freeGameWonContainer.classList.remove('hide');
        }
    }
}
export { displayJourneyInfo };