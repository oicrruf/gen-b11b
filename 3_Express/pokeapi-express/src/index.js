const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("hola mundo!");
});

app.get("/trainer", (req, patito) => {
	const objeto = { id: 1, name: "jose montoya", age: 32 };
	patito.json(objeto);
});

app.listen(port, () => {
	console.log(`Server ok, puerto: ${port}`);
});

/**
 *
 * Este código resultaria en un error porque a y b no están definidas
 * // let a = 1; let b = 2;
 *
 * if (a == b ) {
 * 	return true
 * }
 *
 */
