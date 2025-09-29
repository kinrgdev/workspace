· node.js no es un lenguaje de programación, framework. Es literlamente, un entorno de ejecución de JS. Un sitio donde ejecutar JS.
· V8 es el motor de JavaScript que usa Chrome. Y node.js se ejecuta sobre este mismo motor, permitiendo usar JavaScript en el servidor.
· Está orientado a eventos, usando un Bucle de Eventos (Event Loop) para manejar múltiples solicitudes de forma no bloqueante. Aunque es de un solo hilo (monohilo) para ejecutar JavaScript, delega operaciones pesadas o de I/O a un sistema interno (libuv), que usa un pool de hilos para evitar bloqueos y operar de forma asíncrona.

· Razones:
1. Mercado: Netflix, Trello, etc. No es solo Backend.
2. MERN: MongoDB, Express, React/Angular, Node. NodeJS se usa asi mismo. Todo este entorno está basado en JS
3. crear aplicaciones webs, api's, servicios sin complejidades, scrapping, utilidades
4. Comunidad enorme, muchos módulos y el más grande (npm/pnpm)
5. Rápido, escalable, barato. Es monoproceso, pero puede usar todos los procesos de un servidor. Si se tienen 16 procesos, son 16 procesos, 16 aplicacioones abiertas escalandolo así. Consume más recursos pero es muy escalable.

· Ripple: escribir node en la consola para probar cosas

· Node.js no tiene window. No es su objeto global.
GlobalThis es una variable global para todo, incluido el navegador

· Patrón de diseño: separar todo el proyecto en ficheros.

· CommonJS es la forma clásica. Es importar módulos

// .js > por defecto usa CommonJS
// .mjs > para usar ECMA Script Modules

Para que node reconozca cjs, no puede haber "type": "module", en el package.json

mjs hay que usar la extensión.

map no para el proceso del await. Lo hace todo a la vez.

