const Osoba = require('./Osoba');
const Logger = require('../logger/Loger');
const PregledPritisak = require("../pregledi/PregledPritisak");
const PregledHolesterol = require("../pregledi/PregledHolesterol");
const PregledSecer = require("../pregledi/PregledSecer");

const log = Logger;

module.exports = class Doktor extends Osoba {

    constructor(ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
        this.listaPacijenata = [];
        this.listaPregleda = [];
        log.logujAkciju(`Kreiran doktor ${this.ime} ${this.prezime}`, false);
    }

    dodajPacijenta(pacijent) {
        this.listaPacijenata.push(pacijent);
        log.logujAkciju(`${this.ime} ${this.prezime} je dodao pacijenta ${pacijent.ime} ${pacijent.prezime} na listu pacijenata`,false);
    }

    zakaziPregled(pacijent, tipPregleda, datumPregleda) {
        let pregled = '';
        switch(tipPregleda) {
            case "pritisak":
                pregled = new PregledPritisak(this, pacijent, datumPregleda);
                this.listaPregleda.push(pregled);
                Logger.logujAkciju(`Doktor ${pregled.doktor.ime} je zakazao laboratorijski pregled krvnog pritiska za pacijenta ${pregled.pacijent.ime} za ${pregled.datumPregleda}`, false);
            break;
            case "secer": 
                pregled = new PregledSecer(this, pacijent, datumPregleda);
                this.listaPregleda.push(pregled);
                Logger.logujAkciju(`Doktor ${pregled.doktor.ime} je zakazao laboratorijski pregled secera u krvi za pacijenta ${pregled.pacijent.ime} za ${pregled.datumPregleda}`, false);
            break;
            case "holesterol":
                pregled = new PregledHolesterol(this, pacijent, datumPregleda);
                this.listaPregleda.push(pregled);
                Logger.logujAkciju(`Doktor ${pregled.doktor.ime} je zakazao laboratorijski pregled holesterola u krvi za pacijenta ${pregled.pacijent.ime} za ${pregled.datumPregleda}`, false);
            break;
        }
    }

    ukloniPacijenta(pacijent) {
        let index = this.listaPacijenata.indexOf(pacijent);
        log.logujAkciju(`${this.ime} ${this.prezime} je uklonio pacijenta ${pacijent.ime} ${pacijent.prezime} sa liste pacijenata`,false);
    }

    obaviPregled(index) {
        this.listaPregleda[index].obaviPregled();
    }
}