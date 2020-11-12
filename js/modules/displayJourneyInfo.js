import { calculateDuration } from '../modules/calculateDuration.js';
import { fetchJson , destinations } from '../modules/fetchJson.js';
import { getData } from '../modules/getData.js';


const stationsContainer = document.querySelector('#placeCurrentInfo');
const placeStartContainer = document.querySelector('#placeStartInfo');
const placeEndContainer = document.querySelector('#placeEndInfo');
const durationContainer = document.querySelector('#journeyDuration');
const gameWonContainer = document.querySelector('#ct_gameWon');
const gameLostContainer = document.querySelector('#ct_gameLost');
const freeGameWonContainer = document.querySelector('#ct_freeGameWon');
let counter = 0;

let displayJourneyInfo = (time, placeStart, gametype) => {
    if (stationsContainer.innerHTML == '') {
        placeStartContainer.innerHTML = placeStart;
        placeStartContainer.setAttribute('data-time', time);
        placeEndContainer.innerHTML = document.querySelector('#placeEnd').innerHTML;
        stationsContainer.innerHTML = 'Deine Reise: ';
    } else {
        stationsContainer.innerHTML += placeStart + ',' + time + ')' + ', ';
    }
    if (durationContainer != null) {
        durationContainer.innerHTML = calculateDuration(time, placeStartContainer);
    }

    if (placeStart == (document.querySelector('#placeEnd').innerHTML)) {
        if (gametype === 1) {               // im levelplay modus
            gameWonContainer.classList.remove('hide');
        }else if (gametype === 0){        // im freeplay modus
            counter++;
            if(destinations[counter].destination){
                freeGameWonContainer.classList.remove('hide');
                document.querySelector('#placeEndNew').innerHTML = destinations[counter].destination;
                placeEndContainer.innerHTML = 'Zielort: ' + destinations[counter].destination;
                getData('freeplay', '10:00');
            }else{
                gameWonContainer.classList.remove('hide');
            }

        }
    }
}
export { displayJourneyInfo };