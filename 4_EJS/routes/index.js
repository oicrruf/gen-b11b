var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Inicio",
    message: "Bienvenido",
  });
});

router.get("/pokemon/:name", function (req, res, next) {
  let { name } = req.params;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
    console.log(response)
    res.render("pokemon", {
      title: name,
      
      data: response.data,
    });
  });
});

router.get("/todos", function (req, res, next) {
  axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
    console.log(response.data);
    res.render("todos", {
      title: "Todos",
      data: response.data,
    });
  });
});

module.exports = router;

// axios({
//   method: "get",
//   url: "https://jsonplaceholder.typicode.com/todos/2",
// }).then(function (response) {
//   console.log(response.data);
// });

// axios({
//   url: "https://jsonplaceholder.typicode.com/todos/2",
// }).then(function (response) {
//   console.log(response.data);
// });
