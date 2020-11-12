import { map } from '../modules/map.js';

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
    }
    setAsInstance() {
        allPlaces.push(this);
    }
    placeOnMap(type) {
        //VARIANTE 1: Rückgabe im GEOJSON-Format für Mapbox
        // return {
        //     'type': 'Point',
        //     'coordinates': [this.lon, this.lat]
        // }
        //VARIANTE 2: add Marker als HTML Element
        let dot = document.createElement('span');
        dot.classList.add("placeDot");
        if(type === 0){
            dot.classList.add("placeDotEnd");
        }
        let marker = new mapboxgl.Marker(dot)
          .setLngLat([this.lon, this.lat])
          .addTo(map);
    }
}

export { allPlaces, Place };
