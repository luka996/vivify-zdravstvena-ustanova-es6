const Osoba = require('./Osoba');
const Pacijent = require('./Pacijent');

module.exports = class Doktor extends Osoba {
    constructor(ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
        this.listaPacijenata = [];
        this.listaPregleda = [];
        console.log(`Kreiran doktor ${this.ime} ${this.prezime}`);
    }

    dodajPacijenta(pacijent) {
        this.listaPacijenata.push(pacijent);
        console.log(`Dodat pacijent na listu`);
    }

    dodajPregled(pacijent, pregled) {
        this.listaPregleda.push({'Pacijent': pacijent, 'Pregled': pregled});
    }

    ukloniPacijenta(pacijent) {
        let index = this.listaPacijenata.indexOf(pacijent);
    }
}