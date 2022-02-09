const express = require('express');
const dummyRouter = express.Router();

dummyRouter.get("/saluda", (req, res) => {
	res.send("hola mundo!");
});

module.exports = dummyRouter;
