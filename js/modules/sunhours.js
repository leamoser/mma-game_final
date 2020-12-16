// source: https://stackoverflow.com/questions/7064531/sunrise-sunset-times-in-c
// lon = -- =x
// lat = | = y = Längen
// timezone 1: 0-86 und 304 - 365
// timezone 2: 87 - 303

let timezone = 1;

let sunCalc = (now, lat, long) => {
    let dayOfYear = getDayOfYear(now);
    if(dayOfYear>=87 && dayOfYear<=303){ timezone = 2; }
    let lh = long/15;
    let t = dayOfYear + ((6-lh)/24);
    let m = (0.9856 * t) - 3.289;
    let l1 =  m + (1.916 * Math.sin((Math.PI/180)*m)) + (0.020 * Math.sin(2*(Math.PI/180)*m)) + 282.634;
    let l2 = l1-360;
    let ra1 = 180/Math.PI * Math.atan(0.91764 * Math.tan((Math.PI/180)*l2));
    let ra2 = ra1+360;
    let lQuad = Math.floor(l2/90)*90;
    let raQuad = Math.floor(ra1/90)*90;
    ra1 = ra1+lQuad-raQuad;
    ra1 = ra1/15;
    let sinDecl = 0.39782 * Math.sin(l2*Math.PI/180);
    let cosDecl = Math.cos(Math.asin(sinDecl));
    let cosH = (Math.sin((Math.PI/180)*(-0.83)) - (sinDecl * Math.sin((Math.PI/180)*lat))) / (cosDecl * Math.cos((Math.PI/180)*lat));

    //h1 für sonnenaufgang
    let h1 = 360-(180/Math.PI)*Math.acos(cosH);
    h1 = h1/15;

    //h2 für sonnenuntergang
    let h2 = (180/Math.PI)*Math.acos(cosH);
    h2 = h2/15;

    //time für sonnenaufgang
    let sunrise = h1 + ra1 - (0.06571 * t) - 6.622;

    //time2 für sonnenuntergang
    let sunset = h2 + ra1 - (0.06571 * t) - 6.622 + 24;

    // +1 für winterzeit, +2 füs sommerzeit
    let utSunrise = sunrise-lh+timezone;
    let utSunset = sunset-lh+timezone;

    let sunHours = {
        sunrise: utSunrise,
        sunset: utSunset
    };

    return sunHours;
}


// functions
function getDayOfYear(now){
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

export { sunCalc }