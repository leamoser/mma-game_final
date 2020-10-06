//Imports
import { Stop } from '../classes/stop.js';

//Funktion
let fetchStops = (placeStart, placeEnd, time) => {
    //Container holen
    let parent = event.target.parentElement.parentElement.children[1];
    parent.innerHTML = '';
    //Fetch
    let url = `https://fahrplan.search.ch/api/route.json?from=${placeStart}&to=${placeEnd}&time=${time}&num=1`;
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
            let finalStop = new Stop(time, placeEnd, stop.stopid);
            allStops.push(finalStop);

            console.log(allStops);
            allStops.forEach((stop) => {
                let item = new Stop(stop.departure, placeStart, placeEnd, stop.name, stop.stopid);
                parent.innerHTML += item.outputToDom();
            })

        })
}

//Export
export { fetchStops };