let loadNav = (event) => {
    const navcontainer = event.target.parentElement;
    if (navcontainer.classList.contains('open')) {
        navcontainer.classList.remove('open');
        event.target.innerHTML = '=';
    } else {
        navcontainer.classList.add('open');
        event.target.innerHTML = '  X  ';
    }
}
export { loadNav };