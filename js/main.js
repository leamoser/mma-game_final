//IMPORTS**************************************************
import { Connection } from './classes/connection.js';
import { allPlaces, Place } from './classes/place.js';
import { Stop } from './classes/stop.js';
import { fetchPlace } from './modules/fetchPlace.js';

//AUSFÜHRUNG***********************************************
document.addEventListener('DOMContentLoaded', function () {
    //PREPS****************************************************
    //Map
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpY2VtbWFyaWUiLCJhIjoiY2tlc2gxZHgwM2JubzJ5bnB5dHYzeGR1diJ9.1wrlj5nw4_9Kt9TaqH91QA';
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/alicemmarie/ckfsnp39s45ig1arhz638s8fq/draft', // stylesheet location
        center: [8.22, 46.8], // starting position [lng, lat]
        zoom: 5.9, // starting zoom
        minZoom: 5.9,
        maxZoom: 13
    });
    map.on('load', function () {
        //layer ausblenden die nicht gebraucht werden
        //Auf klick einblenden
        //initMap();
        //Zeichnen der Punkte
        //drawPlace(startplace);
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