//Instanzensammlung
let allConnections = [];

//Variabeln
let schedule = document.querySelector('article#ct_schedule');

//Class
class Connection {
    constructor(time, placeStart, placeEnd, traintype) {
        this.time = time;
        this.placeStart = placeStart;
        this.placeEnd = placeEnd;
        this.traintype = traintype;
        this.setAsInstance();
    }
    setAsInstance() {
        allConnections.push(this);
    }
    sliceTime() {
        return this.time.slice(11, 16);
    }
    outputToDom() {
        let output = `
        <div class="ct_connection">
            <div class="info_basic">
                <p>${this.sliceTime()} | Nach ${this.placeEnd}</p>
                <button onclick="showStops()" class="btn_more" data-time="${this.sliceTime()}" data-placestart="${this.placeStart}" data-placeend="${this.placeEnd}">+</button>
            </div>
            <div class="info_extended">
            </div>
        </div>
       `;
        schedule.innerHTML += output;
    }
}

//Export
export { allConnections, Connection };
