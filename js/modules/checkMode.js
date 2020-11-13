const maxTransitionContainer = document.querySelector('#maxTransitions');

let gametype;

let checkMode = (mode) => {
    if(mode === 'easy'){
        maxTransitionContainer.setAttribute('data-maxTransitions', '7')
        maxTransitionContainer.innerHTML = '7';
        gametype = 7;
        return gametype;
    }else if(mode === 'medium'){
        maxTransitionContainer.setAttribute('data-maxTransitions', '11')
        maxTransitionContainer.innerHTML = '11';
        gametype = 11;
        return gametype;
    }else if(mode === 'hard'){
        maxTransitionContainer.setAttribute('data-maxTransitions', '15')
        maxTransitionContainer.innerHTML = '15';
        gametype = 15;
        return gametype;
    }
}

export {checkMode};