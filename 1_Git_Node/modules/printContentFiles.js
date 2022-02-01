const fs = require("fs");

const printContent = (files) => {
  files.forEach((file) => {
    fs.readFile(file.path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log({ ...file, detail: JSON.parse(data.toString()) });
      }
    });
  });
};

module.exports = printContent;
