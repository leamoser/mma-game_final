let baseday = 4;
let additor = 0;

//-----------------------------------------------------------------
//FUNKTION---------------------------------------------------------
let calculateDuration = (actualTimeRaw, placeStartContainer) => {
    let startTimeRaw = placeStartContainer.getAttribute('data-time');
    let startTime = new Date(2020, 4, baseday, startTimeRaw.slice(0, 2), startTimeRaw.slice(3, 6));
    let actualTime = new Date(2020, 4, baseday, actualTimeRaw.slice(0, 2), actualTimeRaw.slice(3, 6));
    if (startTime.getTime() <= actualTime.getTime() != true) {
        additor = 1;
        actualTime = new Date(2020, 4, baseday + additor, actualTimeRaw.slice(0, 2), actualTimeRaw.slice(3, 6));
    }
    let differenceInMinutes = (actualTime - startTime) / 1000 / 60;
    let minutes = (differenceInMinutes % 60);
    let formattetMinutes = ('0' + minutes).slice(-2);
    return `Du bist seit ${Math.floor(differenceInMinutes / 60)} Stunden und ${formattetMinutes} Minuten unterwegs.`;
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { calculateDuration };