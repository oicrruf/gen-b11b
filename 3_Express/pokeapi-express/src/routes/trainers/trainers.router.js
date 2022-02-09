const express = require('express');
const trainerRouter = express.Router();

trainerRouter.get("/", (req, res) => {
	const objeto = [ { id: 1, name: "jose montoya", age: 32 }, { id: '1', name: "ash ketchum", age: 10, region: '3' } ];
    // LOGICA CON LA BASE DE DATOS
	res.json(objeto);
});

trainerRouter.get("/:id", (req, res) => {
	const objeto = { id: 1, name: "jose montoya", age: 32 };
    // LOGICA CON LA BASE DE DATOS
	res.json(objeto);
});

// Request Param: Ejecutar una operaciones sobre un elemento especifico
// http://localhost:3000/trainers?page=34&size=12
trainerRouter.get("/:idTrainer/region/:idRegion", (req, res) => {
	const { idTrainer, idRegion } = req.params; 
	const objeto = { id: idTrainer, name: "ash ketchum", age: 10, region: idRegion };
    // LOGICA CON LA BASE DE DATOS
	res.json(objeto);
});

// Query Params: Filtrar la informacion
// http://localhost:3000/trainers?page=34&size=12
trainerRouter.get("/", (req, res) => {
	// const page = req.query.page;
	// const size = req.query.size;
	// { page: 1, size: 10 }
	const { page, size } = req.query; 
    // LOGICA CON LA BASE DE DATOS
	if (page && size) {
		res.json({ page, size });
	} else {
		res.send('Parametro obligatorios');
	}
});

trainerRouter.post('/', (req, res) => {
	const body = req.body;
	console.log('body:', body);
    // LOGICA CON LA BASE DE DATOS
	res.json({
		message: 'created',
		data: body
	});
});

trainerRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    // LOGICA CON LA BASE DE DATOS
    res.json({
        message: 'deleted',
        id
    });
});

trainerRouter.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    // LOGICA CON LA BASE DE DATOS
    res.json({
        message: 'updated all',
        id,
        data: body
    });
});

trainerRouter.patch('/', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    // LOGICA CON LA BASE DE DATOS
    res.json({
        message: 'updated partial',
        id,
    });
});

module.exports = trainerRouter;