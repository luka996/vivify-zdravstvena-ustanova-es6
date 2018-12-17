const PregledObrok = require('./PregledObrok');
const Logger = require('../logger/Loger');

module.exports = class PregledSecer extends PregledObrok {
    constructor(doktor, pacijent, datumPregleda, vremeObroka = "01/01/2001") {
        super(doktor, pacijent, datumPregleda, vremeObroka);
        this.vrednost = '';
    }

    obaviPregled() {
        this.vrednost = Math.floor((Math.random() * 6) +1 );
        Logger.logujAkciju(`Za pacijenta ${this.pacijent.ime} je obavljen laboratorijski pregled secera u krvi sa rezultatom ${this.vrednost}`, false);
    }
}