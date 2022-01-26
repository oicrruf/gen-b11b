const moment = require("moment");
const os = require("os");
const fs = require('fs');
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

console.log("Bienvenido 🐨");

let file = {};

if (!fs.existsSync('user')){
  fs.mkdirSync('user');
}

const rl = readline.createInterface({ input, output });

rl.question("¿Cuál es tu nombre de usuario? ", (user) => {
  file.user = user;
  file.os = os.platform();
  file.hostname = os.hostname();
  file.createAt = moment();
  
  fs.writeFile(`./user/${user}.json`, JSON.stringify(file), (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('Archivo creado')
    }
  })
  rl.close();
});



