import { destinations } from "./fetchJson.js";
import { getData } from "./getData.js";
import { initCockpit } from "./initCockpit.js";
import { fetchPlaceEnd } from "./fetchPlaceEnd.js";


// Variables
const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');
const freeGameWonContainer = document.querySelector('#ct_freeGameWon');
let counterWon = 0;

// Funktion
let checkGoal = (placeStart, placeEnd, gametype, time) => {
    if (placeStart === placeEnd) {
        if (gametype === 1) {
            // im levelplay modus
            gameWonContainer.classList.remove('hide');
        } else if (gametype === 0) {
            // im freeplay modus
            counterWon++;
            if (destinations[counterWon].destination) {
                freeGameWonContainer.classList.remove('hide');
                // Break Screen  befüllen
                document.querySelector('#placeEndNew').innerHTML = destinations[counterWon].destination;
                //Neuer Endort laden
                fetchPlaceEnd(destinations[counterWon].destination);
                // Cockpit neu laden
                initCockpit(time, placeStart, destinations[counterWon].destination);
                let allDots = document.querySelectorAll('span.mapboxgl-marker');
                allDots.forEach((dot) => {
                    dot.classList.add('old');
                })
            } else {
                gameWonContainer.classList.remove('hide');
            }

        }
    }
}

export { checkGoal };
