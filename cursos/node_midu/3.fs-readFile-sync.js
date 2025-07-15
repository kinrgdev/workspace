// &(readfile es Asíncrono >> No bloquea el hilo principal y se ejecuta en paralelo al hilo principal
const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('— primer texto:', text)

console.log('Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
const text2 = fs.readFile('./archivo2.txt', 'utf-8')
console.log('— segundo texto:', text2)
