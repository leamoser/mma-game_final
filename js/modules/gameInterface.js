let displayGameInterface = () => {
    let gamecontainer = document.querySelector('#game');
    let infoscreen = document.querySelector('#infoscreen');
    gamecontainer.classList.remove('hide');
    infoscreen.classList.add('hide');
}
export { displayGameInterface };