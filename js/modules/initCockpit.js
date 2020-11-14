import { convertModeToString } from '../modules/checkMode.js';

const placeStartContainer = document.querySelector('#placeStartInfo');
const placeEndContainer = document.querySelector('#placeEndInfo');
const levelModusContainer = document.querySelector('#levelModus');

let initCockpit = (time, startPlace, endPlace, gametype) => {
    let gameTypeName = convertModeToString(gametype);
    levelModusContainer.innerHTML += gameTypeName;
    placeStartContainer.innerHTML = startPlace;
    placeStartContainer.setAttribute('data-time', time);
    placeEndContainer.innerHTML = endPlace;
}

export { initCockpit };