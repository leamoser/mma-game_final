//Class
class Stop {
    constructor(timeStart, placeStart, timeEnd, placeEnd, stopId) {
        this.timeStart = timeStart;
        this.placeStart = placeStart;
        this.timeEnd = timeEnd;
        this.placeEnd = placeEnd;
        this.stopId = stopId;
    }
    outputToDom() {
        if (this.stopId.slice(0, 2) === '000') {
            let output = `
            <option value="${this.name}" data-time="${this.time}" data-depart="${this.depart}" data-terminal="${this.terminal}">${this.name}</option>
            `;
            return output;
        }
    }
}

//Exports
export { Stop };