const Logger = require('../logger/Loger');

module.exports = class Pregled {
    constructor(pacijent) {
        this.pacijent = pacijent;
    }
    
    vremePregleda() {
        let datum = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        let sati = date.getHours() < 9? '0' + date.getHours() : date.getHours();
        let sekunde = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let minuti = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let vreme = `${sati}:${minuti}:${sekunde}`;
        return `${datum} ${vreme}`
    }
}