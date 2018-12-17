const Pregled = require('./Pregled');
const Logger = require('../logger');


module.exports = class PregledPritisak extends Pregled
{
    constructor(pacijent) {
        super(pacijent);
        this.gornjaVrednost = Math.floor((Math.random() * 150) + 90);
        this.donjaVrednost = Math.floor((Math.random() * 120) + 60);
        this.puls = Math.floor((Math.random() * 200) + 80);
        this.puls = puls;
    }

    obaviPregled() {
        let rezultat = (this.gornjaVrednost + this.donjaVrednost())/2;
    }
}