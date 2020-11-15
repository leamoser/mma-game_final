//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const maxTransitionContainer = document.querySelector('#maxTransitions');
let gametype;
let gametypeName;


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let checkMode = (mode) => {
    if (mode == 'easy') {
        maxTransitionContainer.setAttribute('data-maxTransitions', '7')
        maxTransitionContainer.innerHTML = '7';
        gametype = 7;
        return gametype;
    } else if (mode == 'medium') {
        maxTransitionContainer.setAttribute('data-maxTransitions', '11')
        maxTransitionContainer.innerHTML = '11';
        gametype = 11;
        return gametype;
    } else if (mode == 'hard') {
        maxTransitionContainer.setAttribute('data-maxTransitions', '15')
        maxTransitionContainer.innerHTML = '15';
        gametype = 15;
        return gametype;
    } if (mode == 0) {
        gametype = 0;
        return gametype;
    }
}
let convertModeToString = (gametype) => {
    if (gametype == '7') {
        gametypeName = 'Easy';
        return gametypeName;
    } else if (gametype == '11') {
        gametypeName = 'Medium';
        return gametypeName;
    } else if (gametype == '15') {
        gametypeName = 'Hard';
        return gametypeName;
    } else if (gametype == '0') {
        gametypeName = 'Freeplay';
        return gametypeName;
    } else {
        return 'noConversion';
    }
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { checkMode, convertModeToString };