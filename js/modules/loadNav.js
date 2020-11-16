//-----------------------------------------------------------------
//FUNKTION---------------------------------------------------------
let loadNav = (event) => {
    const navcontainer = event.target.parentElement;
    if (navcontainer.classList.contains('open')) {
        navcontainer.classList.remove('open');
        event.target.innerHTML = '=';
        //document.querySelector('main').classList.remove('fixed');

    } else {
        navcontainer.classList.add('open');
        event.target.innerHTML = '  X  ';
        //document.querySelector('main').classList.add('fixed');
    }
}

//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { loadNav };