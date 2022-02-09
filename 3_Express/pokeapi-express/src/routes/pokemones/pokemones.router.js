const express = require('express');
const pokemonRouter = express.Router();

pokemonRouter.get("/", (req, res) => {
	res.send("hola soy un pokemon!");
});

module.exports = pokemonRouter;