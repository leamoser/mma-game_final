let fetchStops = (placeStart, placeEnd, time) => {
    let parent = this.parentElement;
    parent.innerHTML = '';
    let output = `<select id="zwischenstationen_${depart}"></select>`;
    parent.innerHTML += output;
    let url = `https://fahrplan.search.ch/api/route.json?from=${placeStart}&to=${placeEnd}&time=${time}&num=1`;
    const otherParameters = {
        method: "GET"
    }
    fetch(url, otherParameters)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log(data);
            let allStops = data.connections[0].legs[0].stops;
            let itemParent = parent.children[0];
            // console.log('Parent', itemParent);
            //Für jeden Stop ein Ausstiegeobjekt erstellen und dieses dann im Dom anzeigen
            allStops.forEach((stop) => {
                let item = new Zwischenhalt(time, placeStart, placeEnd, stop.name);
                itemParent.innerHTML += item.outputToDom();
            })
            //placeEnd auch als Option anfügen
            let finalstation = new Zwischenhalt(time, placeStart, placeEnd, placeEnd);
            itemParent.innerHTML += finalstation.outputToDom();
        })
}

export { fetchStops };