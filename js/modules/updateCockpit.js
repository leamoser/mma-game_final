let writeContainer = (placeStart, journeyInfoContainer) => {
    //Hauptcontainer
    let newCockpitDot = document.createElement('div');
    //Dot
    let newInidcator = document.createElement('span');
    newInidcator.classList.add('indicator');
    newCockpitDot.appendChild(newInidcator);
    //Container
    let newOrt = document.createElement('p');
    newOrt.innerHTML = placeStart;
    newCockpitDot.appendChild(newOrt);
    //Hauptcontainer anschliessen
    journeyInfoContainer.appendChild(newCockpitDot);
}

let updateCockpit = (placeStart) => {
    let journeyInfoContainer = document.querySelector('#journeyInfo');
    writeContainer(placeStart, journeyInfoContainer);
}

export { updateCockpit };