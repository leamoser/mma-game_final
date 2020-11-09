import { fetchStops } from './fetchStops.js';
import { allConnections, Connection } from '../classes/connection.js';
import { allPlaces, Place } from '../classes/place.js';
import { displayJourneyInfo } from '../modules/displayJourneyInfo.js';
import { drawConnection } from "./drawConnection.js";

//Variabeln
const otherParameters = { method: "GET" };
const limit = 5;
let move = 0;

//Funktion
let fetchPlace = (placeStart, time) => {
    allConnections.length = 0;
    document.querySelector('#ct_schedule').innerHTML = '';
    //Schreiben der Jurney-Informationen
    displayJourneyInfo(time, placeStart);
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
            place.placeOnMap();


            //Neue Instanz für alle Connections
            data.connections.forEach((connection) => {
                new Connection(connection.time, placeStart, connection.terminal.name, connection.line);
            })
            //Alle Instanzen im DOM ausgeben
            allConnections.forEach((connection) => {
                connection.outputToDom();
            })

            // Verbindungen auf der Karte zeichnen
            move++;
            if(allPlaces.length>1){
                let lastPlace = allPlaces[allPlaces.length - 2];
                drawConnection( lastPlace.lon, lastPlace.lat, place.lon, place.lat, move);
            }
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
