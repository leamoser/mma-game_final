import {buttonsMap} from "./map.js";

let toggleLayerButtons = (m1, m2 , m3, nthMove) => {
    if(nthMove >= m1){
        buttonsMap[0].classList.remove('hide');
    }
    if(nthMove >= m2){
        buttonsMap[1].classList.remove('hide');
    }
    if(nthMove >= m3){
        buttonsMap[2].classList.remove('hide');
    }
}

export {toggleLayerButtons}