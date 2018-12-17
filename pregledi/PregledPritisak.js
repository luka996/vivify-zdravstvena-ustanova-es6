const Pregled = require('./Pregled');
const Logger = require('../logger/Loger');


module.exports = class PregledPritisak extends Pregled
{
    constructor(doktor, pacijent, datumPregleda) {
        super(doktor, pacijent, datumPregleda);
        this.gornjaVrednost = Math.floor((Math.random() * 150) + 90);
        this.donjaVrednost = Math.floor((Math.random() * 120) + 60);
        this.puls = Math.floor((Math.random() * 200) + 80);
    }

    obaviPregled() {
        let rezultat = (this.gornjaVrednost + this.donjaVrednost)/2;
        Logger.logujAkciju(`Za pacijenta ${this.pacijent.ime} je obavljen laboratorijski pregled pritiska sa rezultatom ${rezultat}`, false);
    }
}