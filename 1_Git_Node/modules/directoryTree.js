const dirTree = require("directory-tree");

const filesDetails = dirTree("./users");

module.exports = filesDetails;
