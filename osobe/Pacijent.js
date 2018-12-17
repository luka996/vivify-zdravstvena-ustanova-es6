const Osoba = require('./Osoba');
const Doktor = require('./Doktor');
const Logger = require('../logger/Loger');

let log = new Logger();

module.exports = class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brojKartona) {
        super(ime, prezime);
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
        this.izabraniLekar = null;
        log.logujAkciju(`Kreiran pacijent ${this.ime} ${this.prezime}`, false);
    }

    izaberiLekara(lekar) {
        if(this.izabraniLekar != null) {
            this.izabraniLekar.ukloniPacijenta(this);
            this.izabraniLekar = lekar;
            lekar.dodajPacijenta(this);
            log.logujAkciju(`Pacijent ${this.ime} ${this.prezime} je promenio izabranog lekara na ${lekar.ime} ${lekar.prezime}`, false);
        }
        else {
            this.izabraniLekar = lekar;
            lekar.dodajPacijenta(this);
            log.logujAkciju(`Pacijent ${this.ime} ${this.prezime} je promenio izabranog lekara na ${lekar.ime} ${lekar.prezime}`, false);
        }
    }   
}