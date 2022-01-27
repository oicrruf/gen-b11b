const fs = require("fs");
const printContent = require('./printContentFiles')

console.log(printContent)

fs.readdir("./users", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    printContent(files);
  }
});

