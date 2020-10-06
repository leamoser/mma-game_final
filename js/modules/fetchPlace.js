import { fetchStops } from './fetchStops.js';
import { allConnections, Connection } from '../classes/connection.js';
import { allPlaces, Place } from '../classes/place.js';

//Variabeln
const otherParameters = { method: "GET" };
const limit = 8;

//Funktion
let fetchPlace = (placeStart) => {
    allConnections.length = 0;
    document.querySelector('#ct_schedule').innerHTML = '';
    document.querySelector('#placeCurrent').innerHTML += placeStart + ' | ';
    //URL
    let url = `https://fahrplan.search.ch/api/stationboard.json?stop=${placeStart}&show_delays=1&limit=${limit}&transportation_types=train`;
    //Fetch
    fetch(url, otherParameters)
        .then((response) => {
            return response.json()
        })
        //Neuer Dot initialisieren
        .then((data) => {
            //Ort kreieren
            new Place(data.stop.name, data.stop.lon, data.stop.lat);
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
            let lastPlace = allPlaces[allPlaces.length - 1];
            lastPlace.placeOnMap();
        })
        .then(() => {
            //Eventlisteners auf alle Orte
            let btnsMore = document.querySelectorAll('.btn_more');
            btnsMore.forEach((btn) => {
                btn.addEventListener('click', function (event) {
                    fetchStops(event.target.getAttribute('data-placestart'), event.target.getAttribute('data-placeend'), event.target.getAttribute('data-time'));
                }, false)
            })
        })
}

export { fetchPlace };