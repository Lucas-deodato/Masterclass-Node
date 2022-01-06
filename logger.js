const EventEmitter = require('events')  // módulo de eventos do node; obs: events é uma classe
const fs = require('fs')  // módulo filesystem do node
const path = require('path')  // módulo path do node; normaliza paths em todos os OS

const emitter = new EventEmitter()  // instância da classe events

emitter.on('log', (message) => {  // nome do evento, e o que fará após ouví-lo
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {  // arquivo + dados a inserir no arq + erros
        if (err) throw err
    })
})

function log(message) {  // passando o argumento para emitter.on; o que será emitido lá
    emitter.emit('log', message)
}  

module.exports = log  // permite que log() seja usada(importada) em outro arquivo