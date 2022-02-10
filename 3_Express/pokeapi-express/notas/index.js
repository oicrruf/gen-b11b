/*
// EJEMPLO 1
// VARIABLES SIMPLES => FUNCIONA POR VALOR
let numero = 1;
let numero_dos = 2;

console.log('numero: ', numero);
console.log('numero_dos: ', numero_dos);

let numero_tres = numero_dos;
console.log('numero_tres: ', numero_tres);

console.log('==============');
numero_dos = 10;
console.log('numero_dos: ', numero_dos);
console.log('numero_tres: ', numero_tres);
*/

// EJEMPLO 2
// VARIABLES COMPLEJAS (OBJETOS Y ARRAYS) => FUNCIONA POR REFERENCIA
/*
let objeto = { id: 1, name: 'jose' };
let objeto2 = { ...objeto };
console.log('objeto: ', objeto);
console.log('objeto2: ', objeto2);
objeto2.name = 'victor';
console.log('objeto: ', objeto);
console.log('objeto2: ', objeto2);
*/

// EJEMPLO 3
/*
let arreglo = [1, 2, 3, 4];
let arreglo2 = [ ...arreglo ];
console.log('arreglo: ', arreglo);
console.log('arreglo2: ', arreglo2);
arreglo2.push(10);
console.log('arreglo: ', arreglo);
console.log('arreglo2: ', arreglo2);
*/

// EJEMPLO 4 
let newObjeto = { id: 3, name: 'estudiante', app:'devf' };
let newArr = [1, 2, 5, 10];
let objeto2 = { ...newObjeto };
let array2 = [ ...newArr ];

// ... => spread operator