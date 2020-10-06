//Imports
import { Stop } from '../classes/stop.js';
import { fetchPlace } from '../modules/fetchPlace.js';
import { allConnections, Connection } from '../classes/connection.js';

//Funktion
let fetchStops = (placeStart, placeEnd, time) => {
    //Container holen
    let parent = event.target.parentElement.parentElement.children[1];
    parent.innerHTML = '';
    //Fetch
    let url = `https://fahrplan.search.ch/api/route.json?from=${placeStart}&to=${placeEnd}&time=${time}&num=1&transportation_types=train`;
    const otherParameters = {
        method: "GET"
    }
    fetch(url, otherParameters)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //Alle Stops erfasssen inkl. Endhaltestelle
            let allStops = data.connections[0].legs[0].stops;
            //für alle Stops eine Instanz erstellen
            allStops.forEach((stop) => {
                let item = new Stop(stop.departure, stop.name, stop.stopid);
                parent.innerHTML += item.outputToDom();
            })
            //Endstation anhängen (muss am schluss sein!)
            let finalStop = new Stop(time, placeEnd, '8888888');
            parent.innerHTML += finalStop.outputToDom();
        })
        .then(() => {
            let btnsPlace = document.querySelectorAll('.btnPlace');
            btnsPlace.forEach((btn) => {
                btn.addEventListener('click', function (event) {
                    fetchPlace(event.target.getAttribute('data-place'));
                }, false)
            })
        })
}

//Export
export { fetchStops };