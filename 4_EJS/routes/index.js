var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
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

  axios
    .get("https://pokeapi.co/api/v2/pokemon/287")
    .then(function (response) {



      console.log(response.data)
      res.render("index", response.data);
    });
});

module.exports = router;
