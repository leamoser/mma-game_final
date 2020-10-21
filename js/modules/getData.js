import { fetchPlace } from './fetchPlace.js';

let getData = (subpage) => {
    let placeStart;
    let placeEnd = document.querySelector('#placeEnd').innerHTML;
    //Daten holen
    if (subpage.search('freeplay') != -1) {
        //Freeplay
        placeStart = document.querySelector('#inputStartPlace').value;
    } else {
        placeStart = document.querySelector('#placeStart').innerHTML;
    }
    //Daten weitergeben
    //paintCocpit(placeStart, placeEnd);
    fetchPlace(placeStart);
}

export { getData };