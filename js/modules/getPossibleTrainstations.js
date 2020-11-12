let getPossibleTrainstations = (event) => {
    const otherParameters = { method: "GET", maxjsonlength: '3' };
    let path = '/assets/json/trainstations.json';
    let allMatchingStations = [];
    let container = event.target.parentElement;
    container.innerHTML += `
        <select id="cars" name="cars" size="5">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select> 
    `;
    //Fetch
    fetch(path, otherParameters)
        .then((response) => {
            return response.json()
        })
        //Neuer Dot initialisieren
        .then((data) => {
            allMatchingStations = [];
            let input = event.target.value;
            if (input.length >= 3) {
                data.forEach((station) => {
                    if (station.haltestelle.search(input) != -1) {
                        allMatchingStations.push(station.haltestelle);
                    }
                })
            }
        })
        .then(() => {
            for (let i = 0; i < 5; i++) {
                console.log(allMatchingStations[i])
            }
        })
}
export { getPossibleTrainstations };