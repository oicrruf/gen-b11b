// BLOQUE 1
// Codigo ejecutado linea tras linea por el eventloop
/*
console.log('1 Inicio');
console.log('2 Ejecutando');
console.log('3 Terminando');
*/

// BLOQUE 2
// Ejecucion que toma tiempo siempre va al event queue
/*
console.log('1 Inicio');
setTimeout(() => {
    console.log('2 Ejecutando');
}, 0000)
console.log('3 Terminando');
*/

// BLOQUE 3
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

// BLOQUE 4
// Solucion 2 Promesas
// Promise: Algo que va a ocurrir pero no sabemos cuando va a ocurrir.
// Estados de las promesas: Pendiente (pending), resuelto (resolve) y rechazado (reject)
/*
function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Ejecutando');
            resolve();
            // reject(new Error('mi custom error'));
        }, 1000)
    });
}

// BLOQUE 5
console.log('1 Inicio');
asincrona().then(() => {
    // Siguientes acciones despues de que responde la promesa con resolve()
    console.log('en el then');
    console.log('3 Terminando');
    // siguiente paso
    // asincrona2
    // .then(
    //     asincrona3.then()
    //     ...
    // )
    // .catch()
    // .finally()
}).catch(error => { 
    // Siguientes acciones despues de que responde la promesa con reject()
    console.log('error: ', error)
})
.finally(() => {
    // Se ejecuta siempre, tanto si la promesa fue resolve o reject
    console.log('4 FIN');
    console.log('en el finally')
})
*/

// BLOQUE 6
// Async - await
function generateReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 en generacion del reporte');
            resolve();
        }, 4000)
    });
}

function getPromotions() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3 obtiendo promociones');
            resolve();
        }, 4000)
    });
}

async function run() {
    console.log('1 Inicio');
    await generateReport();
    await getPromotions();
    console.log('4 Terminando');
}

run();

// SINCRONO: Una linea de codigo se ejecuta en orden y siempre despues de otra
// ASINCRONO: No necesariamente el codigo se ejecuta linea por linea (secuencialmente)
// callback, promise, await => manejar la asincronia del codigo