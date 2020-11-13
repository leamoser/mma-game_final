let darkMode = (time) => {
    console.log(parseInt(time.slice(0, 2)))
    if (parseInt(time.slice(0, 2)) <= 8 || parseInt(time.slice(0, 2)) >= 20) {
        document.documentElement.style.setProperty('--co-hauptfarbe', '#600c0c');
        document.documentElement.style.setProperty('--co-hauptfarbe-50', '#356d6e');
        document.documentElement.style.setProperty('--co-akzent-fancy', '#977005');
        document.documentElement.style.setProperty('--co-negativ', '#cdcdc7');
    } else {
        document.documentElement.style.removeProperty('--co-hauptfarbe');
        document.documentElement.style.removeProperty('--co-hauptfarbe-50');
        document.documentElement.style.removeProperty('--co-akzent-fancy');
        document.documentElement.style.removeProperty('--co-negativ');
    }

}
export { darkMode } 