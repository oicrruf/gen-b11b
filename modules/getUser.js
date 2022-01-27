const moment = require("moment");
const os = require("os");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const fs = require("fs");

const rl = readline.createInterface({ input, output });

let file = {};

if (!fs.existsSync("users")) {
  fs.mkdirSync("users"); 
}

rl.question("¿Cuál es tu nombre de usuario? ", (user) => {
  file.user = user;
  file.os = os.platform();
  file.hostname = os.hostname();
  file.createAt = moment();

  fs.writeFile(`./users/${user}.json`, JSON.stringify(file), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo creado");
    }
  });

  rl.close();
});
