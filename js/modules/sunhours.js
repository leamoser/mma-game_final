// lon = -- =x
// lat = | = y = Längen

const y1 =  (2*Math.PI)/(365);
const timezone = 1;
const lat = 46.94809; // BERN
const long = 7.44744;
const hour = 6; // 18 Uhr
const min = 15;
const sec = 30;
const dayInYear = 182;
const zenith = 90.833;
const cosZenith = Math.cos(zenith);
const cosLat = Math.cos(lat);
const tanLat = Math.tan(lat);
let cosPhi;
let cosTeta;
//
// let y = y1*(dayInYear-1+ ((hour-12)/24));
// let eqtime = 229.18*(0.000075+0.001868*Math.cos(y)-0.032077*Math.sin(y)-0.014615*Math.cos(2*y)-0.040849*Math.sin(2*y));
// let declination = 0.006918-0.399912*Math.cos(y) + 0.070257*Math.sin(y)-0.006758*Math.cos(2*y) + 0.000907*Math.sin(2*y)-0.002697*Math.cos(3*y) + 0.00148*Math.sin(3*y);
// let timeOffset = eqtime+4*long-60*timezone;
// let tst = hour*60 + min + sec/60 + timeOffset;
// let ha1 = (tst/4)-180;
// let solarHour = (tst/4)-180;
// let calc = (cosZenith/(cosLat*Math.cos(declination))) - (tanLat * Math.tan(declination));
// let ha = Math.acos(calc);
// cosPhi = Math.sin(lat)*Math.sin(declination) + Math.cos(lat)*Math.cos(declination)*Math.cos(ha1);
// let phi = Math.acos(cosPhi);
// cosTeta = -(Math.sin(lat)*Math.cos(phi)-Math.sin(declination))/(Math.cos(lat)* Math.sin(phi));
// let teta = 180- Math.acos(cosTeta);
// let sunrise = 720-4*(long+ha1)-eqtime;
// let snoon = 720-4*long-eqtime;
//
// console.log('teta: '+teta)
// console.log('phi. '+phi)
// console.log('cal: '+calc)
// console.log('sunrise: '+sunrise)
// console.log('sunnoon: '+snoon)
//

let lh = long/15;
let t = dayInYear + ((6-lh)/24);
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

//h für sonnenaufgang
let h = 360-(180/Math.PI)*Math.acos(cosH);
h = h/15;

//h2 für sonnenuntergang
let h2 = (180/Math.PI)*Math.acos(cosH);
h2 = h2/15;

//time für sonnenaufgang
let time = h + ra1 - (0.06571 * t) - 6.622;

//time2 für sonnenuntergang
let time2 = h2 + ra1 - (0.06571 * t) - 6.622 + 24;

// +1 für winterzeit, +2 füs sommerzeit
let ut = time2-lh+1;




console.log("ra1: "+ra1)
console.log('cosh: '+cosH)
console.log('ut: '+ut);


let suncalc = () => {

//     BERN: 46°56'53.12"N, 7°26'50.78"E.
//     N: 46.94809
//     E: 7.44744 -> important

//    cos(omega) =-tan(phi) * tan(delta)
// where:
//    omega =  is the hour angle at either sunrise (when negative value is taken) or sunset (when positive value is taken);
//      phi =  is the latitude of the observer on the Earth;
//    delta =  is the sun declination.

//    Return sunset if omega is negative
//    Return sunrise if omega is positive

}

export { suncalc }