import { calculateDuration } from '../modules/calculateDuration.js';

let displayJourneyInfo = (time, placeStart) => {
    let stationsContainer = document.querySelector('#placeCurrentInfo');
    let placeStartContainer = document.querySelector('#placeStartInfo');
    let placeEndContainer = document.querySelector('#placeEndInfo');
    let durationContainer = document.querySelector('#journeyDuration');
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
}
export { displayJourneyInfo };