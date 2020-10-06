//Class
class Stop {
    constructor(time, place, stopId) {
        this.time = time;
        this.place = place;
        this.stopId = stopId;
    }
    outputToDom() {
        if (this.stopId.slice(0, 2) === '000') {
            let output = `
            <button data-time="${this.time}" data-place="${this.place}">${this.place}</button>
            `;
            return output;
        }
    }
}

//Exports
export { Stop };