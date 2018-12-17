const PregledObrok = require('./PregledObrok');
const Logger = require('../logger/Loger');

module.exports = class PregledHolesterol extends PregledObrok {
    constructor(doktor, pacijent, datumPregleda, vremeObroka= "08/08/2008") {
        super(doktor, pacijent, datumPregleda, vremeObroka);
        this.vrednost = '';
    }
    
    obaviPregled() {
        this.vrednost = Math.random() * 0.3 + 8;
        Logger.logujAkciju(`Za pacijenta ${this.pacijent.ime} je obavljen laboratorijski pregled holesterola u krvi sa rezultatom ${this.vrednost}`, false);
    }
}