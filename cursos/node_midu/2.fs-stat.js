////Síncrono (bloquea el hilo principal)
const fs = require('node:fs') //&A partir de node 16, se recomienda poner node: antes de fs

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //Si es fichero
    stats.isDirectory(), //Si es un directorio
    stats.isSymbolicLink(), //Si es un enlace simbólico
    stats.size, //Tamaño en bytes
    stats.mtime, //Fecha de modificación
    stats.ctime, //Fecha de creación
    stats.atime, //Fecha de acceso
    stats.uid, //ID del usuario
    stats.gid, //ID del grupo
    stats.rdev, //ID del dispositivo
    stats.blksize, //Tamaño de bloque
    stats.blocks, //Número de bloques
    stats.ino, //Número de inodo
)