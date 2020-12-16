//-----------------------------------------------------------------
//IMPORTS----------------------------------------------------------
import { switchDarkMode } from './map.js';
import { sunCalc } from "./sunhours.js";

const today = new Date();

//-----------------------------------------------------------------
//FUNKTIONEN-------------------------------------------------------
let darkMode = (formattetTime, placeLat, placeLong) => {
    let sunHours = sunCalc(today, placeLat, placeLong)
    let hour = parseInt(formattetTime.slice(0, 2));
    let minute = 1/60*parseInt(formattetTime.slice(3, 5));
    let time = hour+minute;

    if (time<= sunHours.sunrise || time >= sunHours.sunset) {
        document.documentElement.style.setProperty('--co-hauptfarbe', '#600c0c');
        document.documentElement.style.setProperty('--co-hauptfarbe-50', '#356d6e');
        document.documentElement.style.setProperty('--co-akzent-fancy', '#977005');
        document.documentElement.style.setProperty('--co-negativ', '#cdcdc7');
        document.documentElement.style.setProperty('--co-typo-darkred', '#E84646');
        document.documentElement.style.setProperty('--co-typo-darkyellow', '#F7BB17');
        document.documentElement.style.setProperty('--co-typo-darkblue', '#77BDBE');
        document.documentElement.style.setProperty('--co-akzent-fancy-switch', '#F7BB17');
        document.documentElement.style.setProperty('--co-akzent-pos', '#0D391C');
        switchDarkMode('dark');
    } else {
        document.documentElement.style.removeProperty('--co-hauptfarbe');
        document.documentElement.style.removeProperty('--co-hauptfarbe-50');
        document.documentElement.style.removeProperty('--co-akzent-fancy');
        document.documentElement.style.removeProperty('--co-negativ');
        document.documentElement.style.removeProperty('--co-typo-darkred');
        document.documentElement.style.removeProperty('--co-typo-darkyellow');
        document.documentElement.style.removeProperty('--co-typo-darkblue');
        document.documentElement.style.removeProperty('--co-akzent-fancy-switch');
        document.documentElement.style.removeProperty('--co-akzent-pos');
        switchDarkMode('light');

    }
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { darkMode } 