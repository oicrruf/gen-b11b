const fs = require("fs");
const printContent = require("./printContentFiles");
const filesDetails = require("./directoryTree");


fs.readdir("./users", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    printContent(filesDetails.children);
  }
});
