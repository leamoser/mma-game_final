//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { switchDarkMode } from './map.js';


//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let darkMode = (time) => {
    if (parseInt(time.slice(0, 2)) <= 8 || parseInt(time.slice(0, 2)) >= 20) {
        document.documentElement.style.setProperty('--co-hauptfarbe', '#600c0c');
        document.documentElement.style.setProperty('--co-hauptfarbe-50', '#356d6e');
        document.documentElement.style.setProperty('--co-akzent-fancy', '#977005');
        document.documentElement.style.setProperty('--co-negativ', '#cdcdc7');
        document.documentElement.style.setProperty('--co-typo-darkred', '#E84646');
        document.documentElement.style.setProperty('--co-typo-darkyellow', '#F7BB17');
        document.documentElement.style.setProperty('--co-typo-darkblue', '#77BDBE');
        document.documentElement.style.setProperty('--co-akzent-fancy-switch', '#F7BB17');
        switchDarkMode('dark');

    } else {
        document.documentElement.style.removeProperty('--co-hauptfarbe');
        document.documentElement.style.removeProperty('--co-hauptfarbe-50');
        document.documentElement.style.removeProperty('--co-akzent-fancy');
        document.documentElement.style.removeProperty('--co-negativ');
        switchDarkMode('light');

    }
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { darkMode } 