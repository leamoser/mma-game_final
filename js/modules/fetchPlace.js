import { fetchStops } from './fetchStops.js';
import { allConnections, Connection } from '../classes/connection.js';
import { allPlaces, Place } from '../classes/place.js';
import { displayJourneyInfo } from '../modules/displayJourneyInfo.js';
import { drawConnection } from "./drawConnection.js";
import { breakScreen} from "./breakScreen.js";

// Wird jedes mal ausgeführt, wenn neuer Ort ausgewählt wurde
// bei jedem nthMove wird das alles ausgeführt
// - displayJourneyInfo() ->
// - API Abfrage für die möglichen Zugverbindungen ab Startort
// - Neue Place Instanz
//      - in allPlaces gepusht
//      - auf der Karte gezeichnet
// - alle Connections werden instanziert und ausgegeben
// - falls mehr als zwei Spielzüge (nthMove) vorhanden, wird Verbindung gezeichnet mit drawConnection()
// - nach jedem Spielzug wird Break Screen aufgerufen
// - Für alle Connections wird ein Button erstellt, mit EventListener -> auf klick fetchStops()


//Variabeln
const otherParameters = { method: "GET" };
const limit = 10;
let nthMove = 0;

//Funktion
let fetchPlace = (placeStart, placeEnd, time, gametype) => {
    allConnections.length = 0;
    document.querySelector('#ct_schedule').innerHTML = '';

    // PlaceEnd wird immer aktualisiert, wenn sich Wert im Cockpit ändert
    // (relevant für Freeplay, wo sich PlaceEnd ändert)
    if(document.querySelector('#placeEndInfo').innerHTML != ''){
        placeEnd = document.querySelector('#placeEndInfo').innerHTML;
    }

    //Schreiben der Journey-Informationen
    displayJourneyInfo(placeStart, placeEnd, gametype, time, nthMove);

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
            place.placeOnMap(1);

            //Neue Instanz für alle Connections
            data.connections.forEach((connection) => {
                new Connection(connection.time, placeStart, connection.terminal.name, connection.line);
            })

            //Alle Instanzen im DOM ausgeben
            allConnections.forEach((connection) => {
                connection.outputToDom();
            })

            // Verbindungen auf der Karte zeichnen
            nthMove++;
            if (allPlaces.length > 1) {
                let lastPlace = allPlaces[allPlaces.length - 2];
                drawConnection(lastPlace.lon, lastPlace.lat, place.lon, place.lat, nthMove);
            }

            // Neuer Ort im Journey Info Break Screen anzeigen
            if (nthMove > 1) {
                breakScreen(placeStart);
            }
        })
        .then(() => {
            //Eventlisteners auf alle Orte
            let btnsMore = document.querySelectorAll('.btn_more');
            btnsMore.forEach((btn) => {
                btn.addEventListener('click', function (event) {
                    fetchStops(event.target.getAttribute('data-placestart'), event.target.getAttribute('data-placeend'),  event.target.getAttribute('data-time'), gametype, placeEnd);
                }, false)
            })
        })
}

export { fetchPlace };
