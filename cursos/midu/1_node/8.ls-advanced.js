const fs = require('node:fs/promises')
const path = require('node:path')
const folder = process.argv[2] ?? '.' // Si no se pasa el argumento, se usa el directorio actual
const piccolo = require('picocolors')

async function ls(folder) {
    let files
    try {  ////FileSystem para la información de cada archivo
        files = await fs.readdir(folder) ////Secuencial. Hay que leer el directorio antes de continuar
    } catch {
        console.error(piccolo.red(`Error al leer el directorio: ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => { ////Paralelo. Para recuperar la información de todos los archivos del directorio a la vez
        const filePath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filePath) // status - infomración del archivo
        } catch {
            console.error(piccolo.red(`Error al leer el archivo: ${filePath}`))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()
        const isHidden = file.startsWith('.')
        const fileVisibility = isHidden ? 'H' : ''

        return `${fileType} ${piccolo.blue(file.padEnd(20))} ${piccolo.green(fileSize.toString().padStart(20))} ${piccolo.yellow(fileModified)} ${piccolo.magentaBright(fileVisibility)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)

/*
node .\8.ls-advanced.js .\cjs
index.js
sum.js
*/
