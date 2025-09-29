// Esto sólo en los módulos nativos que no tienen promesas nativas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from 'node:fs/promises'

Promise.allSettled([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo3.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
])
    .then(([text, secondText]) => {
        console.log('primer texto:', text)
        console.log('segundo texto:', secondText)
    })

// Lo bueno de esto es que es más rápido y no bloquea el hilo principal
