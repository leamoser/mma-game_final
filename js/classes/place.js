//Instanzensammlung
let allPlaces = [];

// lon = -- =x
// lat = | = y

//Class
class Place {
    constructor(placeStart, lon, lat) {
        this.placeStart = placeStart;
        this.lat = lat
        this.lon = lon;
        this.setAsInstance()
    }
    setAsInstance() {
        allPlaces.push(this);
    }
    placeOnMap() {
        //Rückgabe im GEOJSON-Format für Mapbox
        return {
            'type': 'Point',
            'coordinates': [this.lon, this.lat]
        }
    }
}

export { allPlaces, Place };