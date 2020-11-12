import {destinations} from "./fetchJson.js";
import {getData} from "./getData.js";
import {initCockpit} from "./initCockpit.js";


// Variables
const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');
const freeGameWonContainer = document.querySelector('#ct_freeGameWon');
let counterWon = 0;

// Funktion
let checkGoal = (placeStart, placeEnd, gametype, time) => {
    console.log('Check goal placeStart: '+ placeStart);
    console.log('Check goal placeEnd: '+ placeEnd);

    if (placeStart === placeEnd) {
        if (gametype === 1) {
            // im levelplay modus
            gameWonContainer.classList.remove('hide');
        }else if (gametype === 0){
            // im freeplay modus
            counterWon++;
            if(destinations[counterWon].destination){
                freeGameWonContainer.classList.remove('hide');
                // Break Screen  befüllen
                document.querySelector('#placeEndNew').innerHTML = destinations[counterWon].destination;
                // Cockpit neu laden
                initCockpit(time, placeStart, destinations[counterWon].destination)
                // getData('freeplay', time);
            }else{
                gameWonContainer.classList.remove('hide');
            }

        }
    }
}

export {checkGoal};
