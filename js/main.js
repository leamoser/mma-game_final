//IMPORTS**************************************************
import { allConnections, Connection } from './classes/connection.js';
import { allPlaces, Place } from './classes/place.js';
import { Stop } from './classes/stop.js';
import { fetchPlace } from './modules/fetchPlace.js';
import { map } from './modules/map.js';
import { fetchJson } from './modules/fetchJson.js';
import { getData } from './modules/getData.js';
import { loadNav } from './modules/loadNav.js';
import { displayGameInterface } from './modules/gameInterface.js';
import { getTime } from './modules/getTime.js';


//VARIABELN************************************************
const subpage = window.location.pathname;
const navtoggle = document.querySelector('#nav_toggle');

//AUSFÜHRUNG***********************************************
document.addEventListener('DOMContentLoaded', function () {
    //PREPS KARTE******************************************
    if (subpage.search('play') != -1) {
        map.dragRotate.disable();
        let point = [8.22, 46.8];
        let features = map.queryRenderedFeatures(point, { layers: ['berge'] });
        map.on('load', function () {
            //layer ausblenden die nicht gebraucht werden
            //Auf klick einblenden
            //initMap();
        })
    }

    //INIT*************************************************
    let init = () => {
        //Gamemodus
        if (subpage.search('play') != -1) {
            //Laden von Orten mit JSON wenn richtige Unterseite
            let mode = document.querySelector('section#infoscreen').getAttribute('data-level');
            if (mode === 'freeplay') {
                fetchJson('/assets/json/freeplay-places.json', subpage);
            } else {
                fetchJson('/assets/json/levels-' + mode + '.json', subpage);
            }
            //Event wenn man und los klickt
            document.querySelector('button#startPlay').addEventListener('click', function () {
                event.preventDefault();
                getData(subpage, getTime());
                displayGameInterface();
            })
        }
        //Bodyvariabeln für CSS
        if (subpage.search('play') != -1) {
            document.querySelector('body').classList.add('play');
        }
        //Burger
        navtoggle.addEventListener('click', function () {
            loadNav(event);
        }, false);
    }
    init();
}, false);
