
const fs = require('fs');
let instance = null;

class Logger {
    constructor() {
    }

    genDateTimeStamp() {
        let date = new Date();
        let datum = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
        let sati = date.getHours() < 9? '0' + date.getHours() : date.getHours();
        let sekunde = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let minuti = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let vreme = `${sati}:${minuti}:${sekunde}`;
        return `[${datum}][${vreme}]`;
    }

    logujAkciju(akcija, isConsole) {
        if(isConsole == false) {
            fs.appendFileSync("../log.txt", `\n ${this.genDateTimeStamp()} ${akcija}`);
        } else {
            console.log(`\n ${this.genDateTimeStamp()} ${akcija}`);
        }
    }

}

let logger = new Logger();
Object.freeze(logger);

module.exports = logger;