const express = express('express');
const dummyRouter = express.Router();

dummyRouter.get("/", (req, res) => {
	res.send("hola mundo!");
});

module.exports = dummyRouter;
