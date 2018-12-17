const Osoba = require("../osobe/Osoba");
const Doktor = require("../osobe/Doktor");
const Pacijent = require("../osobe/Pacijent");


let testDoktor = new Doktor("Test", "Testeric", "Test");
let testDoktor2 = new Doktor("Test2", "Testerkovic2", "Test");
let testPacijent = new Pacijent("Test", "Testeric", "Test", "Test");
testPacijent.izaberiLekara(testDoktor);
testPacijent.izaberiLekara(testDoktor2);