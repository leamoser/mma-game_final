//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { fetchPlace } from './fetchPlace.js';
import { fetchPlaceEnd } from './fetchPlaceEnd.js';


//-----------------------------------------------------------------
//ERKLÄRUNGEN------------------------------------------------------
// wird 1x ausgefühlt (nachdem Spiel gestartet wird)
// Holt die editierten Daten aus dem Infoscreen


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
let placeStart;
let placeEnd;
let gametype; // 0 = freeplay , 7 / 11 / 15 = levelmodus


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let getData = (subpage, time) => {
    if (subpage.search('freeplay') != -1) {
        //Freeplay
        placeStart = document.querySelector('#inputStartPlace').value;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
        gametype = 0;
    } else {
        // Level Modus
        let levelMode = document.querySelector('#maxTransitions').getAttribute('data-maxtransitions');
        placeStart = document.querySelector('#placeStart').innerHTML;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
        gametype = levelMode;
    }
    // Zielort darstellen
    fetchPlaceEnd(placeEnd);
    // Startort wird erstes Mal dargestellt
    fetchPlace(placeStart, placeEnd, time, gametype);
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { getData };