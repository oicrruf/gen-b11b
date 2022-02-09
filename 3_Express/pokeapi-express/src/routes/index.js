const express = require('express');
const dummyRoutes = require('./dummy/dummy.router');
const trainerRoutes = require('./trainers/trainers.router');
const pokemonRoutes = require('./pokemones/pokemones.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/dummyes', dummyRoutes);
    router.use('/trainers', trainerRoutes);
    router.use('/pokemones', pokemonRoutes);
    router.use('/centros', pokemonRoutes);
}

module.exports = routerApi;

// http://localhost:3000/api/v1/trainers/ GET
// http://localhost:3000/api/v1/trainers/:idTrainer/region/:idRegion GET
// http://localhost:3000/api/v1/trainers/?page=10&size=1 GET
// http://localhost:3000/api/v1/trainers/ POST

// DELETE => URL
// PATCH => URL
// PUT => URL

// create, read, update, delete => CRUD