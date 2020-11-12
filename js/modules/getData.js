import { fetchPlace } from './fetchPlace.js';
import { fetchPlaceEnd } from './fetchPlaceEnd.js';

// wird 1x ausgefühlt (nachdem Spiel gestartet wird)
// Holt die editierten Daten aus dem Infoscreen

let placeStart;
let placeEnd;
let gametype; // 0 = freeplay , 1 = levelmodus

let getData = (subpage, time) => {
    if (subpage.search('freeplay') != -1) {
        //Freeplay
        placeStart = document.querySelector('#inputStartPlace').value;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
        gametype = 0;
    } else {
        // Level Modus
        placeStart = document.querySelector('#placeStart').innerHTML;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
        gametype = 1;
    }
    // Zielort darstellen
    fetchPlaceEnd(placeEnd, gametype);
    // Startort wird erstes Mal dargestellt
    fetchPlace(placeStart, placeEnd, time, gametype);
}

export { getData };