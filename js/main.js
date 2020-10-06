//IMPORTS**************************************************
import { allConnections, Connection } from './classes/connection.js';
import { allPlaces, Place } from './classes/place.js';
import { Stop } from './classes/stop.js';
import { fetchPlace } from './modules/fetchPlace.js';
import { map } from './modules/map.js';

//AUSFÜHRUNG***********************************************
document.addEventListener('DOMContentLoaded', function () {
    //PREPS****************************************************
    //disable rotation
    map.dragRotate.disable();

    let point= [8.22, 46.8];
    let features = map.queryRenderedFeatures(point,{layers: ['berge']});
    console.log(features);

    map.on('load', function () {
        //layer ausblenden die nicht gebraucht werden
        //Auf klick einblenden
        //initMap();
    })

    //STUFF************************************************

    //INIT*************************************************
    let init = () => {
        //Laden der ersten Verbindungen
        let placeStart = 'Basel';
        fetchPlace(placeStart);
    }
    init();
}, false);
