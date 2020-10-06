import { fetchStops } from './fetchStops.js';
import { allConnections, Connection } from '../classes/connection.js';
import { allPlaces, Place } from '../classes/place.js';

//Variabeln
const otherParameters = { method: "GET" };
const limit = 10;

//Funktion
let fetchPlace = (placeStart) => {
    //URL
    let url = `https://fahrplan.search.ch/api/stationboard.json?stop=${placeStart}&show_delays=1&limit=${limit}`;
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
            //Eventlisteners auf alle Buttons
            let btnsMore = document.querySelectorAll('.btn_more');
            btnsMore.forEach((btn) => {
                btn.addEventListener('click', function (event) {
                    fetchStops(event.target.getAttribute('data-placestart'), event.target.getAttribute('data-placeend'), event.target.getAttribute('data-time'));
                }, false)
            })
            //Event für Zug wählen
            /*
            let trainbuttons = document.querySelectorAll('.chooseTrain');
            trainbuttons.forEach((button) => {
                button.addEventListener('click', function () {
                    let selectedDepart = this.parentElement.parentElement.children[4].children[0].value;
                    fetchDepartData(selectedDepart);

                    // clearData();
                })
            })
            */
        })
}

export { fetchPlace };