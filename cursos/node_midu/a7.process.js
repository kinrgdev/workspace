//objeto process es un objeto global que proporciona información y control sobre el proceso actual de ejecución
////argumentos de entrada
//*console.log(process.argv)

/*
node .\7.process.js Hola Mundo Goku Vegeta
[
  'C:\\Users\\kinrg\\AppData\\Local\\fnm_multishells\\492_1752496877726\\node.exe', ////ruta del interprete de node
  'C:\\Users\\kinrg\\Documents\\workspace\\cursos\\node_midu\\7.process.js', ////ruta del archivo js
  'Hola',
  'Mundo',
  'Goku',
  'Vegeta'
]
*/

//controlar el proceso y su salida
//process.exit() ////0 es salida normal, ha ido bien, 1 es salida con error

//controlar eventos del proceso
//process.on('exit', () => { ////se ejecuta cuando el proceso finaliza
    //limpiar los recursos
    //limipar la consola
    //Errores concretos
    //*console.log('El proceso ha finalizado')
//})

//current working directory
console.log(process.cwd()) //Nos dice desde que carpeta estamos ejecutando el proceso (trabajando con node)

/*
node .\7.process.js Hola Mundo Goku Vegeta
C:\Users\kinrg\Documents\workspace\cursos\node_midu
*/

//platform //Variable de entorno
console.log(process.env.GOKU)