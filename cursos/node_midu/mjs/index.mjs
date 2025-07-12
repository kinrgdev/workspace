// .js > por defecto usa CommonJS
// .mjs > para usar ES Modules
// .cjs > para usar CommonJS

import { sum, rest, mult } from './sum.mjs'

console.log(sum(1, 2))
console.log(rest(1, 2))
console.log(mult(1, 2))