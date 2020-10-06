//Class
class Stop {
    constructor(time, place, stopId) {
        this.time = time;
        this.place = place;
        this.stopId = stopId;
    }
    outputToDom() {
        if (this.stopId.slice(0, 2) !== '00') {
            let output = `
            <button class="btnPlace" data-time="${this.time}" data-place="${this.place}">${this.place}</button>
            `;
            return output;
        } else {
            return '';
        }
    }
}

//Exports
export { Stop };