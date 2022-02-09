const express = require('express');
const trainerRouter = express.Router();

trainerRouter.get("/trainer", (req, res) => {
	const objeto = { id: 1, name: "jose montoya", age: 32 };
	res.json(objeto);
});

// Request Param: Ejecutar una operaciones sobre un elemento especifico
// http://localhost:3000/trainers?page=34&size=12
trainerRouter.get("/trainer/:idTrainer/region/:idRegion", (req, res) => {
	const { idTrainer, idRegion } = req.params; 
	const objeto = { id: idTrainer, name: "ash ketchum", age: 10, region: idRegion };
	res.json(objeto);
});

// Query Params: Filtrar la informacion
// http://localhost:3000/trainers?page=34&size=12
trainerRouter.get("/trainers", (req, res) => {
	// const page = req.query.page;
	// const size = req.query.size;
	// { page: 1, size: 10 }
	const { page, size } = req.query; 
	if (page && size) {
		res.json({ page, size });
	} else {
		res.send('Parametro obligatorios');
	}
});

trainerRouter.post('/trainer', (req, res) => {
	const body = req.body;
	console.log('body:', body);
	res.json({
		message: 'created',
		data: body
	});
});

module.exports = trainerRouter;