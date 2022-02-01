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
function run() {
    console.log('1 Inicio');
    myFuncion(ejecutando);
    console.log('4 Fin');
}

function myFuncion(ejecutando) {
    setTimeout(() => {
        console.log('2 Ejecutando');
        ejecutando();
    }, 0000)
}

function ejecutando() {
    console.log('3 Terminando');
}

run();