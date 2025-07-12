node.js no es un lenguaje de programación, framework. Es literlamente, un entorno de ejecución de JS. Un sitio donde ejecutar JS.
V8 es el motor de JavaScript que usa Chrome. Y node.js se ejecuta sobre este mismo motor, permitiendo usar JavaScript en el servidor.
Está orientado a eventos, usando un Bucle de Eventos (Event Loop) para manejar múltiples solicitudes de forma no bloqueante. Aunque es de un solo hilo (monohilo) para ejecutar JavaScript, delega operaciones pesadas o de I/O a un sistema interno (libuv), que usa un pool de hilos para evitar bloqueos y operar de forma asíncrona.
