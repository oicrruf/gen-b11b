const operations = require('./functions');

function main() {
    
    let numero1 = 10;
    let numero2 = 2;

    const resSuma = operations.sum(numero1, numero2);
    const resResta = operations.substract(numero1, numero2);
    const resMultipl = operations.multiply(numero1, numero2);
    const resDivision = operations.divide(numero1, numero2);

    console.log(`resSume: ${resSuma}`);
    console.log(`resResta: ${resResta}`);
    console.log(`resMultipl: ${resMultipl}`);
    console.log(`resDivision: ${resDivision}`);

}

main();