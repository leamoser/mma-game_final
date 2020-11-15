//-----------------------------------------------------------------
//VARIABELN--------------------------------------------------------
const startPlayBtn = document.querySelector('button#startPlay');


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let createOption = (name, select) => {
    if (name != undefined) {
        let option = document.createElement('p');
        option.setAttribute('value', name);
        option.classList.add('possibleStation');
        option.innerHTML = name;
        select.appendChild(option);
    }
}
let getPossibleTrainstations = (event) => {
    const otherParameters = { method: "GET", maxjsonlength: '3' };
    let path = '/assets/json/trainstations.json';
    let allMatchingStations = [];
    let container = event.target.parentElement;
    let select = document.querySelector('#possiblePlaces');
    let input = event.target.value;
    select.innerHTML = '';
    //Fetch
    fetch(path, otherParameters)
        .then((response) => {
            return response.json()
        })
        //Neuer Dot initialisieren
        .then((data) => {
            allMatchingStations = [];
            if (input.length >= 3) {
                data.forEach((station) => {
                    if (station.haltestelle.search(new RegExp(input, "i")) != -1) {
                        allMatchingStations.push(station.haltestelle);
                    }
                })
                select.classList.add('open');
            } else {
                select.classList.remove('open');
            }
        })
        .then(() => {
            for (let i = 0; i < 5; i++) {
                createOption(allMatchingStations[i], select);
            }
        })
        .then(() => {
            if (input.length >= 3) {
                let optionPlaces = document.querySelectorAll('.possibleStation');
                let parent = optionPlaces[0].parentElement;
                optionPlaces.forEach((option) => {
                    option.addEventListener('click', function (event) {
                        let input = document.querySelector('#inputStartPlace');
                        input.innerHTML = event.target.innerHTML;
                        input.value = event.target.innerHTML;
                        startPlayBtn.classList.remove('hide');
                        select.innerHTML = '';
                    })
                })
            }
        })
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { getPossibleTrainstations };