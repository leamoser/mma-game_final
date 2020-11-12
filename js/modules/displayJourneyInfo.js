import { calculateDuration } from '../modules/calculateDuration.js';

const stationsContainer = document.querySelector('#placeCurrentInfo');
const placeStartContainer = document.querySelector('#placeStartInfo');
const placeEndContainer = document.querySelector('#placeEndInfo');
const durationContainer = document.querySelector('#journeyDuration');
const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');

let displayJourneyInfo = (time, placeStart) => {
    if (stationsContainer.innerHTML == '') {
        placeStartContainer.innerHTML = 'Startort: ' + placeStart + ' (' + time + ')';
        placeStartContainer.setAttribute('data-time', time);
        placeEndContainer.innerHTML = 'Zielort: ' + document.querySelector('#placeEnd').innerHTML;
        stationsContainer.innerHTML = 'Deine Reise: ';
    } else {
        stationsContainer.innerHTML += placeStart + ' (' + time + ')' + ', ';
    }
    if (durationContainer != null) {
        durationContainer.innerHTML = calculateDuration(time, placeStartContainer);
    }
    if(placeStart == (document.querySelector('#placeEnd').innerHTML)){
        gameWonContainer.classList.remove('hide');
    }
}
export { displayJourneyInfo };