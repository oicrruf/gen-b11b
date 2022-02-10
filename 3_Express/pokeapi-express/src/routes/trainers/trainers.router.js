const express = require('express');
const trainerRouter = express.Router();

trainerRouter.get("/", (req, res) => {
    const { page, size } = req.query;
	const objeto = [ 
        { id: 1, name: "jose montoya", age: 32 }, 
        { id: 2, name: "ash ketchum", age: 10, region: '3' },
        { id: 3, name: "gary oak", age: 10, region: '3' },
    ];
    let data = [];
    if (page && size) {
        data = objeto.splice(0, 2);
	} else {
		data = objeto;
	}
    // LOGICA CON LA BASE DE DATOS
	res.json(data);
});

// Query Params: Filtrar la informacion
trainerRouter.get("/", (req, res) => {
	const { page, size } = req.query; 
    // LOGICA CON LA BASE DE DATOS
	if (page && size) {
		res.json({ page, size });
	} else {
		res.send('Parametro obligatorios');
	}
});

// Request Param: Ejecutar una operaciones sobre un elemento especifico
trainerRouter.get("/:id", (req, res) => {
	const objeto = { id: 1, name: "jose montoya", age: 32 };
    // LOGICA CON LA BASE DE DATOS
	res.json(objeto);
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

trainerRouter.patch('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    // LOGICA CON LA BASE DE DATOS
    res.json({
        message: 'updated partial',
        id,
        data: body
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

trainerRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    // LOGICA CON LA BASE DE DATOS
    res.json({
        message: 'deleted',
        id
    });
});
module.exports = trainerRouter;