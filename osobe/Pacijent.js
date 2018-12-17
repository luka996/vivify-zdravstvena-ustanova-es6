const Osoba = require('./Osoba');
const Doktor = require('./Doktor');

module.exports = class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brojKartona) {
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
        this.izabraniLekar = null;
        console.log(`Kreiran novi pacijent ${this.ime} ${this.prezime}`);
    }

    izaberiLekara(lekar) {
        if(this.izabraniLekar != null) {
            this.izabraniLekar.ukloniPacijenta(this);
            this.izabraniLekar = lekar;
            lekar.dodajPacijenta(this);
            console.log(`Promenjen izabrani lekar ${this.izabraniLekar.ime}`);
        }
        else {
            this.izabraniLekar = lekar;
            lekar.dodajPacijenta(this);
            console.log(`Promenjen izabrani lekar ${this.izabraniLekar.ime}`);
        }
    }   
}