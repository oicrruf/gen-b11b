// Codigo ejecutado linea tras linea por el eventloop
/*
console.log('1 Inicio');
console.log('2 Ejecutando');
console.log('3 Terminando');
*/

// Ejecucion que toma tiempo siempre va al event queue
/*
console.log('1 Inicio');
setTimeout(() => {
    console.log('2 Ejecutando');
}, 0000)
console.log('3 Terminando');
*/

// Solucion 1 Callbacks (NO ES RECOMENDADA por casos de callbackhell)
/*
function run() {
    console.log('1 Inicio');
    myFuncion(ejecutando);
    // console.log('4 Fin');
}

function myFuncion(ejecutando) { 
    setTimeout(() => { // setTimeout es una simulacionde operaciones que toman tiempo (conexiones a BD, consumo de API)
        console.log('2 Ejecutando');
        ejecutando();
    }, 0000)
}

function ejecutando() {
    console.log('3 Terminando');
    console.log('4 Fin');
}

run();
*/

// Solucion 2 Promesas
// Promise: Algo que va a ocurrir pero no sabemos cuando va a ocurrir.
// Estados de las promesas: Pendiente (pending), resuelto (resolve) y rechazado (reject)
function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Ejecutando');
            resolve();
            // reject(new Error('mi custom error'));
        }, 1000)
    });
}

console.log('1 Inicio');
asincrona().then(() => {
    // Siguientes acciones despues de que responde la promesa con resolve()
    console.log('en el then');
    console.log('3 Terminando');
}).catch(error => { 
    // Siguientes acciones despues de que responde la promesa con reject()
    console.log('error: ', error)
})
.finally(() => {
    // Se ejecuta siempre, tanto si la promesa fue resolve o reject
    console.log('4 FIN');
    console.log('en el finally')
})