//IMPORTS**************************************************
import { fetchJson, destinations } from './modules/fetchJson.js';
import { getData } from './modules/getData.js';
import { loadNav } from './modules/loadNav.js';
import { displayGameInterface } from './modules/gameInterface.js';
import { getTime } from './modules/getTime.js';
import { getPossibleTrainstations } from './modules/getPossibleTrainstations.js';
import { checkMode } from './modules/checkMode.js';
import { initMap } from './modules/map.js';
import { appendButtonFetchMore } from './modules/appendButtonFetchMore.js';
import { fetchAnleitung } from './modules/createTutorial.js';
import { fixInfobar } from './modules/fixInfobar.js';
import { sunCalc } from "./modules/sunhours.js";

//VARIABELN************************************************
const subpage = window.location.pathname;
const navtoggle = document.querySelector('#nav_toggle');
const startPlayBtn = document.querySelector('button#startPlay');
const navChooseMode = document.querySelector('#navChooseMode');

//AUSFÜHRUNG***********************************************
document.addEventListener('DOMContentLoaded', function () {

    //INIT*************************************************
    let init = () => {
        //Gamemodus
        if (subpage.search('play') != -1) {
            //Laden von Orten mit JSON wenn richtige Unterseite
            navChooseMode.innerHTML = 'Spiel beenden'
            let mode = document.querySelector('section#infoscreen').getAttribute('data-level');
            if (mode === 'freeplay') {
                appendButtonFetchMore(0);
                checkMode(0);
                fetchJson('/assets/json/freeplay-places.json', subpage);

            } else if (mode == 'medium' || mode == 'easy' || mode == 'hard') {
                //add event listener to btn fetch more
                appendButtonFetchMore(mode);
                checkMode(mode);
                fetchJson('/assets/json/levels-' + mode + '.json', subpage);
            } else {
                window.location.href = "/choose_mode.php";
            }
            //Event wenn man und los klickt
            startPlayBtn.addEventListener('click', function () {
                event.preventDefault();
                getData(subpage, getTime());
                displayGameInterface();
            })
            initMap();
            //Scroll-Reaktion des Containers
            window.onscroll = function () {
                fixInfobar();
            }
        }
        if (subpage.search('freeplay') != -1) {
            let inputField = document.querySelector('input#inputStartPlace');
            inputField.addEventListener('keyup', function (event) {
                getPossibleTrainstations(event);
            })
        }
        if (subpage.search('tutorial') != -1) {
            let tutorialslide = document.querySelector('article#tutorial');
            fetchAnleitung(tutorialslide);
        }
        //Bodyvariabeln für CSS
        if (subpage.search('play') != -1) {
            document.querySelector('body').classList.add('play');
        }
        //Navigation Burger
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
