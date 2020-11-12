//IMPORTS**************************************************
import { allConnections, Connection } from './classes/connection.js';
import { allPlaces, Place } from './classes/place.js';
import { Stop } from './classes/stop.js';
import { fetchPlace } from './modules/fetchPlace.js';
import { fetchJson } from './modules/fetchJson.js';
import { getData } from './modules/getData.js';
import { loadNav } from './modules/loadNav.js';
import { displayGameInterface } from './modules/gameInterface.js';
import { getTime } from './modules/getTime.js';
import { getPossibleTrainstations } from './modules/getPossibleTrainstations.js';


//VARIABELN************************************************
const subpage = window.location.pathname;
const navtoggle = document.querySelector('#nav_toggle');

//AUSFÜHRUNG***********************************************
document.addEventListener('DOMContentLoaded', function () {
    //PREPS KARTE******************************************
    // if (subpage.search('play') != -1) {
    //
    // }

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
        if (subpage.search('freeplay') != -1) {
            let inputField = document.querySelector('input#inputStartPlace');
            inputField.addEventListener('keyup', function (event) {
                getPossibleTrainstations(event);
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
