const express = require('express');
const pokemonRouter = express.Router();
const PokemonesServices = require('../../services/pokemones/pokemones.services');

const servicePokemonObject = new PokemonesServices();

pokemonRouter.get("/", async (req, res) => {
	const data = await servicePokemonObject.getAll();
	res.json({data});
});

module.exports = pokemonRouter;