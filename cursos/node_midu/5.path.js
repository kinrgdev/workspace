// Modulo nativo path
const path = require('path')
console.log(path.sep) // Muestra caracter de separación de directorios del S.O.

const filePath = path.join('content', 'subfolder', 'test.txt') // Unir rutas con path.join
console.log(filePath)

const base = path.basename('/cursos/node_midu/5.path.js') // Nombre de archivo
console.log(base)

const fileName = path.basename('/cursos/node_midu/5.path.js', '.js') // Quita la extensión
console.log(fileName)

const extensión = path.extname('/cursos/node_midu/img/node-sync.jpg') // Da la extensión del archivo
console.log(extensión)

