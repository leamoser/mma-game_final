const maxTransitionContainer = document.querySelector('#maxTransitions');

let checkMode  = (mode) => {
    if(mode === 'easy'){
        maxTransitionContainer.setAttribute('data-maxTransitions', '7')
        maxTransitionContainer.innerHTML = '7';
    }else if(mode === 'medium'){
        maxTransitionContainer.setAttribute('data-maxTransitions', '11')
        maxTransitionContainer.innerHTML = '11';

    }else if(mode === 'hard'){
        maxTransitionContainer.setAttribute('data-maxTransitions', '16')
        maxTransitionContainer.innerHTML = '16';
    }
}

export {checkMode};