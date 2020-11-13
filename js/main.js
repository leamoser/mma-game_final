//IMPORTS**************************************************
import { allConnections, Connection } from './classes/connection.js';
import { allPlaces, Place } from './classes/place.js';
import { Stop } from './classes/stop.js';
import { fetchPlace } from './modules/fetchPlace.js';
import { fetchJson, destinations } from './modules/fetchJson.js';
import { getData } from './modules/getData.js';
import { loadNav } from './modules/loadNav.js';
import { displayGameInterface } from './modules/gameInterface.js';
import { getTime } from './modules/getTime.js';
import { getPossibleTrainstations } from './modules/getPossibleTrainstations.js';
import { fetchMorePlaces } from './modules/fetchMorePlaces.js';
import { checkMode } from './modules/checkMode.js';
import { initMap } from './modules/map.js';
import { appendButtonFetchMore } from './modules/appendButtonFetchMore.js';

//VARIABELN************************************************
const subpage = window.location.pathname;
const navtoggle = document.querySelector('#nav_toggle');

//AUSFÜHRUNG***********************************************
document.addEventListener('DOMContentLoaded', function () {

    //INIT*************************************************
    let init = () => {
        //Gamemodus
        if (subpage.search('play') != -1) {
            //Laden von Orten mit JSON wenn richtige Unterseite
            let mode = document.querySelector('section#infoscreen').getAttribute('data-level');
            if (mode === 'freeplay') {
                appendButtonFetchMore(0);
                checkMode(0);
                fetchJson('/assets/json/freeplay-places.json', subpage);

            } else {
                //add event listener to btn fetch more
                appendButtonFetchMore(mode);
                checkMode(mode);
                fetchJson('/assets/json/levels-' + mode + '.json', subpage);
            }
            //Event wenn man und los klickt
            document.querySelector('button#startPlay').addEventListener('click', function () {
                event.preventDefault();
                getData(subpage, getTime());
                displayGameInterface();
            })

            initMap();

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
        //Fix Height Issue
        let fixHeightIssue = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh-calc', `${vh}px`);
        }
        window.addEventListener('resize', () => {
            fixHeightIssue();
        });
        fixHeightIssue();

    }
    init();
}, false);
