import { fetchPlace } from './fetchPlace.js';
import { fetchPlaceEnd } from './fetchPlaceEnd.js';


let getData = (subpage, time) => {
    let placeStart;
    let placeEnd;
    let gametype; // 0 = freeplay , 1 = levelmodus

    //Daten holen
    if (subpage.search('freeplay') != -1) {
        //Freeplay
        placeStart = document.querySelector('#inputStartPlace').value;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
        gametype = 0;
    } else {
        placeStart = document.querySelector('#placeStart').innerHTML;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
        gametype = 0;
    }
    //Daten weitergeben
    //paintCocpit(placeStart, placeEnd);
    fetchPlaceEnd(placeEnd, gametype);
    fetchPlace(placeStart, time, gametype);
}

export { getData };