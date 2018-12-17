const Pregled = require('./Pregled');

module.exports = class PregledObrok extends Pregled{
    constructor(doktor, pacijent, datumPregleda, vremeObroka) {
        super(doktor, pacijent, datumPregleda);
        this.vremeObroka = vremeObroka;
    }
}