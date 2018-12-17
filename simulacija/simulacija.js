const Doktor = require("../osobe/Doktor");
const Pacijent = require("../osobe/Pacijent");

let pacijentDragan = new Pacijent("Dragan", "Draganovic");
let doktorMilan = new Doktor("Milan","Milanovic", "Otorinolaringolog");

pacijentDragan.izaberiLekara(doktorMilan);
doktorMilan.zakaziPregled(pacijentDragan, 'pritisak', '01/01/2021');
doktorMilan.zakaziPregled(pacijentDragan, 'secer', '09/09/2029');
doktorMilan.obaviPregled(0);
doktorMilan.obaviPregled(1);