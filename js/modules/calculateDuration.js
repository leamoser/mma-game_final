let baseday = 1;
let additor = 0;
let midnight = new Date(2020, 4, 1, 0, 0, 0);
let timePassed = 0
let daysPassed = 0;
let oldTime = 0;

//-----------------------------------------------------------------
//FUNKTION---------------------------------------------------------
let calculateDuration = (actualTimeRaw, placeStartContainer) => {
    let startTimeRaw = placeStartContainer.getAttribute('data-initialTime');
    let startTime = new Date(2020, 4, 1, startTimeRaw.slice(0, 2), startTimeRaw.slice(3, 6));
    let actualTime = new Date(2020, 4, baseday, actualTimeRaw.slice(0, 2), actualTimeRaw.slice(3, 6));
    let timeToMidnight = (startTime-midnight)/1000/60; // 1440 minuten hat ein tag

    console.log("Day ="+baseday);
    console.log("Starttime: "+startTime);
    // console.log('Time to Midnight: '+ timeToMidnight) // -xxxxx seconds till midnight
    console.log("actueltime: "+actualTime)
    console.log("oldtime: "+oldTime)

    // if (startTime.getTime() <= actualTime.getTime() != true) {
    //     additor = 1;
    //     actualTime = new Date(2020, 4, baseday, actualTimeRaw.slice(0, 2), actualTimeRaw.slice(3, 6));
    // }

    let differenceInMinutes = (actualTime - startTime) / 1000 / 60;
    let minutes = (differenceInMinutes % 60);
    let formattetMinutes = ('0' + minutes).slice(-2);

    console.log("diff: "+differenceInMinutes)
    if(d)

    // if(differenceInMinutes<oldTime){
    //     baseday++;
    // }
    oldTime = differenceInMinutes;

    return `Du bist seit ${Math.floor(differenceInMinutes / 60)} Stunden und ${formattetMinutes} Minuten unterwegs.`;
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { calculateDuration };