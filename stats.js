const os = require('os')  // importações de módulos no node; no caso, módulos default ou já baixados
const log = require('./logger')  // a variável reflete a function log() 

// método que recebe como 1° param uma arrow function e depois o intervalo que ela será executada
setInterval(() => { 
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt(( mem / total ) * 100)
    
    stats = {
        total: `${total} MB`,
        free: `${mem} MB`,
        usage: `${percents}%`
    }
    
    console.clear()  // limpa o terminal antes de executar o terminal novamente
    console.log("=== PC STATS ===")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)  // converte de JS para JSON

}, 1000)  

