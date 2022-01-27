const moment = require("moment");
const os = require("os");
const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

console.log("Bienvenido 🐹");

let file = {};

if (!fs.existsSync("users")) {
  fs.mkdirSync("users");
}

// const rl = readline.createInterface({ input, output });

// rl.question("¿Cuál es tu nombre de usuario? ", (user) => {
//   file.user = user;
//   file.os = os.platform();
//   file.hostname = os.hostname();
//   file.createAt = moment();

//   fs.writeFile(`./users/${user}.json`, JSON.stringify(file), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Archivo creado");
//     }
//   });

//   rl.close();
// });

const readFiles = (files) => {
  files.forEach((file) => {
    fs.readFile(`./users/${file}`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.parse(data.toString()));
      }
    });
  });
};

fs.readdir("./users", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    readFiles(files);
  }
});
