//-----------------------------------------------------------------
//FUNKTION---------------------------------------------------------
let fixInfobar = () => {
    let infobar = document.querySelector('#ct_cockpit_added');
    let offsetInfo = infobar.getBoundingClientRect();
    if (offsetInfo.top <= 0) {
        infobar.classList.add('sticky');
    }
    let cockpit = document.querySelector('#ct_cockpit');
    let offsetCockpit = cockpit.getBoundingClientRect();
    if ((offsetCockpit.top * -1) <= cockpit.clientHeight) {
        infobar.classList.remove('sticky');
    }
}

//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { fixInfobar }