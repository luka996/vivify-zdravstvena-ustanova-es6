const Osoba = require('./Osoba');
const Pacijent = require('./Pacijent');

module.exports = class Doktor extends Osoba {
    constructor(ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
        this.listaPacijenata = [];
        console.log(`Kreiran doktor ${this.ime} ${this.prezime}`);
    }

    dodajPacijenta(pacijent) {
        if(pacijent instanceof Pacijent) {
            this.listaPacijenata.push(pacijent);
            console.log(`Dodat pacijent na listu`);
        } else {
            console.log("Prosledite objekat klase Pacijent kao argument");
        }
    }

    ukloniPacijenta(pacijent) {
        let index = this.listaPacijenata.indexOf(pacijent);
    }
}