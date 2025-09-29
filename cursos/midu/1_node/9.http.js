const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) =>{
    console.log('request received')
    res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () =>{ 
        console.log(`server listening on port http://localhost:${port}`)
    })
})

//En el navegador no se ven los console.log que se ejecutan en el servidor