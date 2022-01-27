const fs = require("fs");

const printContent = (files) => {
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

module.exports = printContent;
