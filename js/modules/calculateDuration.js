//-----------------------------------------------------------------
//FUNTKION---------------------------------------------------------
let calculateDuration = (actualTimeRaw, placeStartContainer) => {
    let startTimeRaw = placeStartContainer.getAttribute('data-time');
    let startTime = new Date(2020, 4, 4, startTimeRaw.slice(0, 2), startTimeRaw.slice(3, 6));
    let actualTime = new Date(2020, 4, 4, actualTimeRaw.slice(0, 2), actualTimeRaw.slice(3, 6));
    let differenceInMinutes = (actualTime - startTime) / 1000 / 60;
    let minutes = (differenceInMinutes % 60);
    let formattetMinutes = ('0' + minutes).slice(-2);
    return `Du bist seit ${Math.floor(differenceInMinutes / 60)}:${formattetMinutes} Stunden unterwegs`;
}


//-----------------------------------------------------------------
//EXPORTS----------------------------------------------------------
export { calculateDuration };