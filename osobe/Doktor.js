const Osoba = require('./Osoba');

module.exports = class Doktor extends Osoba {
    constructor(ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
        this.listaPacijenata = [];
        console.log(`Kreiran doktor ${this.ime} ${this.prezime}`);
    }
}