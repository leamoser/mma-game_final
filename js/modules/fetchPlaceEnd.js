//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { allPlaces, Place } from '../classes/place.js';


//-----------------------------------------------------------------
//ERKLÄRUNGEN------------------------------------------------------
// Zielort wird als Instanz vom Place erstellt und auf der Karte gezeichnet


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const otherParameters = { method: "GET" };
const limit = 1;


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let fetchPlaceEnd = (placeEnd) => {
    //URL
    let url = `https://fahrplan.search.ch/api/stationboard.json?stop=${placeEnd}&show_delays=1&limit=${limit}&transportation_types=train`;
    //Fetch
    fetch(url, otherParameters)
        .then((response) => {
            return response.json()
        })
        //Neuer Dot initialisieren
        .then((data) => {
            //Ort kreieren
            let place = new Place(data.stop.name, data.stop.lon, data.stop.lat);
            place.placeOnMap(0);
        })
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { fetchPlaceEnd };
