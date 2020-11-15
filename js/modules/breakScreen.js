//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { wait } from "./wait.js";


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const ct_journeyinfo = document.querySelector('#ct_journeyinfo>h2');
const loadMoreContainer = document.querySelector('#loadMore');
const scheduleContainer = document.querySelector('#ct_schedule');


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
function showContainer(container) {
    scheduleContainer.classList.add('hide');
    loadMoreContainer.classList.add('hide');
    container.classList.remove('hide');
}
function showSchedule() {
    scheduleContainer.classList.remove('hide');
    loadMoreContainer.classList.remove('hide');
}
let breakScreen = (place) => {
    ct_journeyinfo.innerHTML = "Du fährst nach " + place;
    showContainer(ct_journeyinfo.parentNode);
    wait(2000).then(() => {
        ct_journeyinfo.parentNode.classList.add('hide');
        showSchedule();
    });
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { breakScreen };