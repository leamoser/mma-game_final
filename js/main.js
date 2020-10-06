//IMPORTS**************************************************
import { allConnections, Connection } from './classes/connection.js';
import { allPlaces, Place } from './classes/place.js';
import { Stop } from './classes/stop.js';
import { fetchPlace } from './modules/fetchPlace.js';
import { map } from './modules/map.js';
import { fetchJson } from './modules/fetchJson.js';

//VARIABELN************************************************
const subpage = window.location.pathname;
>>>>>>> f7fdd8769a8e25c8850a1ac5b133f7f6c97550d2

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
        if (subpage.search('play') != -1) {
            //Laden der ersten Verbindungen
            let placeStart = 'Basel';
            fetchPlace(placeStart);
            //Laden von Orten mit JSON wenn richtige Unterseite
            let mode = document.querySelector('section#infoscreen').getAttribute('data-level');
            if (mode === 'freeplay') {
                fetchJson('/assets/json/freeplay-places.json');
            } else {
                fetchJson('/assets/json/levels-' + mode + '.json');
            }
        }
    }
    init();
}, false);
