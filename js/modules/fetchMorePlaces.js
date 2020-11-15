//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { allPlaces, Place } from '../classes/place.js';
import { fetchStops } from './fetchStops.js';
import { allConnections, Connection } from '../classes/connection.js';
import { nthMove } from './fetchPlace.js';


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const otherParameters = { method: "GET" };
const limit = 5;


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let fetchMorePlaces = (placeStart, placeEnd, time, gametype) => {
    console.log(gametype)
    allConnections.length = 0;
    //URL
    let url = `https://fahrplan.search.ch/api/stationboard.json?stop=${placeStart}&show_delays=1&limit=${limit}&transportation_types=train&time=${time}&time_type=depart`;
    //Fetch
    fetch(url, otherParameters)
        .then((response) => {
            return response.json()
        })
        //Neuer Dot initialisieren
        .then((data) => {
            //Ort kreieren
            let place = new Place(data.stop.name, data.stop.lon, data.stop.lat);
            place.setAsInstance();
            //Neue Instanz für alle Connections
            data.connections.forEach((connection) => {
                new Connection(connection.time, placeStart, connection.terminal.name, connection.line);
            })
            //Alle Instanzen im DOM ausgeben
            allConnections.forEach((connection) => {
                connection.outputToDom();
            })
        })
        .then(() => {
            //Eventlisteners auf alle Orte
            let btnsMore = document.querySelectorAll('.btn_more');
            btnsMore.forEach((btn) => {
                btn.addEventListener('click', function (event) {
                    fetchStops(event.target.getAttribute('data-placestart'), event.target.getAttribute('data-placeend'), event.target.getAttribute('data-time'), gametype, placeEnd);
                }, false)
            })
        })
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { fetchMorePlaces };
