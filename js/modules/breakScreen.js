import {wait} from "./wait.js";

// Variablen
let ct_journeyinfo = document.querySelector('#ct_journeyinfo>h2');

// Methoden
let breakScreen = (place) => {

    ct_journeyinfo.innerHTML = "Du fährst nach " + place;
    ct_journeyinfo.parentNode.classList.remove('hide');
    wait(1000).then(() => {
        ct_journeyinfo.parentNode.classList.add('hide');
    });
}


export {  breakScreen };