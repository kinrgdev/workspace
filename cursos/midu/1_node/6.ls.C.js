// Con try-catch

const fs = require('node:fs/promises')

fs.readdir('.').then(files => { // LEER EL DIRECTORIO ACTUAL
    files.forEach(file => {
        console.log(file)
    })
})

    .catch(err => {
        if (err) {
            console.error('Error al leer el directorio:', err)
        }
    })
