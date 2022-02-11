const express = require('express');
const trainerRouter = express.Router();
const TrainersServices = require('../../services/trainers/trainers.services');

const serviceTrainerObject = new TrainersServices();

trainerRouter.get("/", async (req, res) => {
    console.log('1 recibiendo solicitud...')
    const { page, size } = req.query;
    // SLOW OPERATION
    const allTrainers = await serviceTrainerObject.find();
    // 
    console.log('3 resuelve slow...')
    let pagination = {};
    if (page && size) {
        pagination = { page, size };
	} 
    let data = {
        data: allTrainers,
        pagination
    }
    console.log('4 regresando respuesta...')
	res.json(data);
});

// Request Param: Ejecutar una operaciones sobre un elemento especifico
trainerRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const trainer = serviceTrainerObject.findOne(id);
	res.json(trainer);
});

trainerRouter.post('/', (req, res) => {
	const body = req.body;
    serviceTrainerObject.create(body);
	res.json({
		message: 'created',
		data: body
	});
});

trainerRouter.patch('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    serviceTrainerObject.editPartial(id, body);
    res.json({
        message: 'updated partial',
        id,
        data: body
    });
});

trainerRouter.put('/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    serviceTrainerObject.updateComplete(id, body);
    res.json({
        message: 'updated all',
        id,
        data: body
    });
});

trainerRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    serviceTrainerObject.delete(id);
    res.json({
        message: 'deleted',
        id
    });
});
module.exports = trainerRouter;