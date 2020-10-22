//Funktion
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
                let index = getRandomValue(data.destinations.length);
                let endPlace = data.destinations[index];
                let endPlaceContainer = document.querySelector('#placeEnd');
                endPlaceContainer.innerHTML = endPlace.destination;
            } else {
                //Play
                let index = getRandomValue(data.connections.length);
                let placeStart = data.connections[index]['placeStart'];
                let placeEnd = data.connections[index]['placeEnd'];
                let placeStartContainer = document.querySelector('#placeStart');
                let placeEndContainer = document.querySelector('#placeEnd');
                placeStartContainer.innerHTML = placeStart;
                placeEndContainer.innerHTML = placeEnd;
            }
        })
        .catch(function (error) {
            console.log('Error: ' + error.message);
        });
}

export { fetchJson };