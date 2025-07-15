const fs = require('node:fs')

fs.readdir('.', (err, files) => { //LEER EL DIRECTORIO ACTUAL
    if (err) {
        console.error('Error al leer el directorio:', err)
        return;
    }
    files.forEach(file => {
        console.log(file)
    })
})