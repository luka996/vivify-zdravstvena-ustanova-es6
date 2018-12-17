const Osoba = require('./Osoba');

module.exports = class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brojKartona) {
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
        this.izabraniLekar = '';
        console.log(`Kreiran novi pacijent ${this.ime} ${this.prezime}`);
    }
}