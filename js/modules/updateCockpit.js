let writeContainer = (time, placeStart) => {
    console.log('write');
}

let updateCockpit = (time, placeStart) => {
    let journeyInfoContainer = document.querySelector('#journeyInfo');
    console.log(journeyInfoContainer);
    writeContainer(time, placeStart);
    // stationsContainer.innerHTML += placeStart + ',' + time + ')' + ', ';
}

export { updateCockpit };