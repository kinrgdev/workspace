const fs = require('node:fs') //A partir de node 16, se recomienda poner node: antes de fs

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //Si es fichero
    stats.isDirectory(), //Si es un directorio
    stats.isSymbolicLink(), //Si es un enlace simbólico
    stats.size, //Tamaño en bytes
)