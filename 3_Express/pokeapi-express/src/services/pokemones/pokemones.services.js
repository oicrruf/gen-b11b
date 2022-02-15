const axios = require('axios');

class PokemonesService {
    
    constructor() {

    }

    async getAll() {
        const res = await axios('http://localhost:3000/pokemons');
        const data = res.data;
        return data;
    }

}

module.exports = PokemonesService;