import {destinations} from "./fetchJson.js";
import {getData} from "./getData.js";
import {initCockpit} from "./initCockpit.js";
import {fetchPlaceEnd} from "./fetchPlaceEnd.js";


// Variables
const scheduleContainer = document.querySelector('#ct_schedule');
const loadMoreContainer = document.querySelector('#loadMore');

const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');
const gameLostSpanMsg = document.querySelector('#gameLostMaxTrans');
const freeGameWonContainer = document.querySelector('#ct_freeGameWon');
let counterWon = 0;

function showContainer(container){
    scheduleContainer.classList.add('hide');
    loadMoreContainer.classList.add('hide');
    container.classList.remove('hide');
}

function showSchedule(){
    scheduleContainer.classList.remove('hide');
    loadMoreContainer.classList.remove('hide')
}

let buttonsHideOnClick = document.querySelectorAll('.hideOnClick');
buttonsHideOnClick.forEach(button => {
    button.onclick = function () {
        button.parentElement.classList.add('hide');
        showSchedule();
    }
})

// Funktion
let checkGoal = (placeStart, placeEnd, gametype, time, nthMove) => {
    // Prüft, ob Ziel erreicht wurde (freeplay und level modus)
    if (placeStart === placeEnd) {
        if (gametype > 0) {
            // im levelplay modus
            showContainer(gameWonContainer);
        }else if (gametype === 0){
            // im freeplay modus
            counterWon++;
            if(destinations[counterWon].destination){
                showContainer(freeGameWonContainer);
                // Break Screen  befüllen
                document.querySelector('#placeEndNew').innerHTML = destinations[counterWon].destination;
                fetchPlaceEnd(destinations[counterWon].destination);

                // Cockpit neu laden
                initCockpit(time, placeStart, destinations[counterWon].destination)
            }else{
                showContainer(gameWonContainer);
            }

        }
    }
    //  Prüft, ob Spiel verloren wurde (Nur für Level Modus)
    if(gametype > 0){
        if( nthMove >= gametype){
            showContainer(gameLostContainer);
            gameLostSpanMsg.innerHTML = nthMove;
        }
    }

}

export {checkGoal};
