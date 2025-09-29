// .js > por defecto usa CommonJS
// .mjs > para usar ECMA Script Modules
// .cjs > para usar CommonJS

import { sum, rest, mult } from './sum.mjs'
//?Es buena práctica poner la extensiión .mjs
console.log(sum(1, 2))
console.log(rest(1, 2))
console.log(mult(1, 2))