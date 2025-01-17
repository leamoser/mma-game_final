//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { destinations } from "./fetchJson.js";
import { initCockpit } from "./initCockpit.js";
import { fetchPlaceEnd } from "./fetchPlaceEnd.js";
import { breakScreen } from "./breakScreen.js";
// import {nthMove} from "./fetchPlace.js";


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const scheduleContainer = document.querySelector('#ct_schedule');
const loadMoreContainer = document.querySelector('#loadMore');
const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');
const freeGameWonContainer = document.querySelector('#ct_freeGameWon');
let counterWon = 0;


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let showContainer = (container) => {
    scheduleContainer.classList.add('hide');
    loadMoreContainer.classList.add('hide');
    container.classList.remove('hide');
}
let showSchedule = () => {
    scheduleContainer.classList.remove('hide');
    loadMoreContainer.classList.remove('hide');
}
let clearJourneyInfo = () => {
    document.querySelector('div#journeyInfo').innerHTML = '';
}
//Versteckt die Weiter-Schaltfläche, wenn jemand im Freeplay weitermacht
let buttonsHideOnClick = document.querySelectorAll('.hideOnClick');
buttonsHideOnClick.forEach(button => {
    button.onclick = function () {
        button.parentElement.parentElement.classList.add('hide');
        showSchedule();
        clearJourneyInfo();
    }
})
let checkGoal = (placeStart, placeEnd, gametype, time, move) => {
    let won = false;
    let lost = false;
    // Prüft, ob Ziel erreicht wurde (freeplay und level modus)
    if (placeStart === placeEnd) {
        won = true;
        if (gametype > 0) {
            // im levelplay modus
            showContainer(gameWonContainer);
        } else if (gametype === 0) {
            // im freeplay modus
            counterWon++;
            if (destinations[counterWon].destination) {
                showContainer(freeGameWonContainer);
                // Break Screen  befüllen
                document.querySelector('#placeEndNew').innerHTML = destinations[counterWon].destination;
                fetchPlaceEnd(destinations[counterWon].destination);
                // Cockpit neu laden
                initCockpit(time, placeStart, destinations[counterWon].destination, move )
            } else {
                showContainer(gameWonContainer);
            }
        }
    }
    //  Prüft, ob Spiel verloren wurde (Nur für Level Modus)
    if (gametype > 0) {
        if (move >= gametype) {
            lost = true;
            showContainer(gameLostContainer);
        }
    }
    // Neuer Ort im Journey Info Break Screen anzeigen
    if (!won && !lost && move > 0) {
        breakScreen(placeStart);
    }
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { checkGoal };
