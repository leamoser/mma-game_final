import { fetchStops } from './fetchStops.js';
import { allConnections, Connection } from '../classes/connection.js';
import { allPlaces, Place } from '../classes/place.js';

//Variabeln
const otherParameters = { method: "GET" };
const limit = 5;

//Funktion
let fetchPlace = (placeStart, time) => {
    allConnections.length = 0;
    document.querySelector('#ct_schedule').innerHTML = '';
    //Schreiben der Jurney-Informationen
    let stationsContainer = document.querySelector('#placeCurrentInfo');
    let placeStartContainer = document.querySelector('#placeStartInfo');
    let placeEndContainer = document.querySelector('#placeEndInfo');
    if (stationsContainer.innerHTML == '') {
        placeStartContainer.innerHTML = 'Startort: ' + placeStart + ' (' + time + ')';
        placeEndContainer.innerHTML = 'Endort: ' + document.querySelector('#placeEnd').innerHTML;
        stationsContainer.innerHTML = 'Deine Reise: ';
    } else {
        stationsContainer.innerHTML += placeStart + ' (' + time + ')' + ', ';
    }
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
