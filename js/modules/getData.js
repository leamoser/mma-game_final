import { fetchPlace } from './fetchPlace.js';
import { fetchPlaceEnd } from './fetchPlaceEnd.js';


let getData = (subpage, time) => {
    let placeStart;
    let placeEnd;

    //Daten holen
    if (subpage.search('freeplay') != -1) {
        //Freeplay
        placeStart = document.querySelector('#inputStartPlace').value;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
    } else {
        placeStart = document.querySelector('#placeStart').innerHTML;
        placeEnd = document.querySelector('#placeEnd').innerHTML;
    }
    //Daten weitergeben
    //paintCocpit(placeStart, placeEnd);
    fetchPlaceEnd(placeEnd);

    fetchPlace(placeStart, time);
}

export { getData };