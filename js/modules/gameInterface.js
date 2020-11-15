//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let displayGameInterface = () => {
    let gamecontainer = document.querySelector('#game');
    let infoscreen = document.querySelector('#infoscreen');
    gamecontainer.classList.remove('hide');
    infoscreen.classList.add('hide');
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { displayGameInterface };