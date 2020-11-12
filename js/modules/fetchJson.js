import { shuffle } from "./shuffle.js";


const endPlaceContainer = document.querySelector('#placeEnd');
const placeStartContainer = document.querySelector('#placeStart');
const placeEndContainer = document.querySelector('#placeEnd');
let destinations = [];

let fetchJson = (path, subpage) => {
    fetch(path)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let getRandomValue = (number) => {
                return Math.floor((Math.random() * number));
            }
            if (subpage.search('freeplay') != -1) {
                //Freeplay
                destinations = data.destinations;
                shuffle(destinations);
                destinations.length = 10;
                let endPlace = destinations[0];
                endPlaceContainer.innerHTML = endPlace.destination;
            } else {
                //Play
                let index = getRandomValue(data.connections.length);
                let placeStart = data.connections[index]['placeStart'];
                let placeEnd = data.connections[index]['placeEnd'];
                placeStartContainer.innerHTML = placeStart;
                placeEndContainer.innerHTML = placeEnd;
            }
        })
        .catch(function (error) {
            console.log('Error: ' + error.message);
        });
}

export { fetchJson , destinations };