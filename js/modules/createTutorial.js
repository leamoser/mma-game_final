//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { wait } from './wait.js';

//-----------------------------------------------------------------
//ERKLÄRUNGEN------------------------------------------------------
// Wird 1x ausgeführt, wenn Modus gewählt wird
// Holt Spiel Daten (assets/json/...) und befüllt Infoscreen


//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
let url = '/assets/json/tutorial.json';
let tutorialslide = document.querySelector('article#tutorial');

//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let nextSlide = (container) => {
    let id = container.dataset.id;
    let id_as_number = parseInt(id);
    let new_id = id_as_number + 1;
    container.dataset.id = new_id;
}

let createAnleitungsslide = (titel, text, bild, container) => {
    let output;
    if (bild != false && container.dataset.id < 5) {
        output = `
        <div>
            <h1>${titel}</h1>
            <p>${text}</p>
            <img src='assets/images/${bild}'>
        </div>
        <button class="full" id="nexslide"><p>Weiter</p></button>
        `;
    } else if (bild == false && container.dataset.id < 5) {
        output = `
        <div>
            <h1>${titel}</h1>
            <p>${text}</p>
        </div>
        <button class="full" id="nexslide"><p>Weiter</p></button>
        `;
    } else {
        output = `
        <h1>${titel}</h1>
        <p>${text}</p>
        `;
    }
    container.innerHTML = output;
    wait(500).then(() => {
        let weiterbutton = document.querySelector('#nexslide');
        weiterbutton.addEventListener('click', function () {
            nextSlide(container);
            fetchAnleitung(tutorialslide);
        })
    });
}

let fetchAnleitung = (tutorialslide) => {
    fetch(url)
        .then((response) => {
            tutorialslide.innerHTML = '<h1>wird geladen...</h1>';
            return response.json();
        })
        .then((data) => {
            //Collect Data
            let id = parseInt(tutorialslide.dataset.id);
            let content = data.anleitungsteil[id];
            //Create Slide
            createAnleitungsslide(content.titel, content.text, content.bild, tutorialslide);
        })
        .catch(function (error) {
            console.log('Error: ' + error.message);
        });
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { fetchAnleitung };