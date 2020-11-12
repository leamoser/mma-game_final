const placeStartContainer = document.querySelector('#placeStartInfo');
const placeEndContainer = document.querySelector('#placeEndInfo');

let initCockpit = (time, startPlace, endPlace) => {
    placeStartContainer.innerHTML = startPlace;
    placeStartContainer.setAttribute('data-time', time);
    placeEndContainer.innerHTML = endPlace;
}

export { initCockpit };