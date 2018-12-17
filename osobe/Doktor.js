const Osoba = require('./Osoba');
const Pacijent = require('./Pacijent');
const Logger = require('../logger/Loger');

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

    dodajPregled(pacijent, pregled) {
        this.listaPregleda.push({'Pacijent': pacijent, 'Pregled': pregled});
    }

    ukloniPacijenta(pacijent) {
        let index = this.listaPacijenata.indexOf(pacijent);
        log.logujAkciju(`${this.ime} ${this.prezime} je uklonio pacijenta ${pacijent.ime} ${pacijent.prezime} sa liste pacijenata`,false);
    }
}