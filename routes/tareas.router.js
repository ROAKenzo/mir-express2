const express = require("express");
const Router = express.Router();
const path = require("path");




Router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/views", "/tareas.html"));

});
Router.get("*", (req, res) => {
  res.status(404).send("Not Found")
});

Router.post("/tareas", (req, res) => {
  
  console.log(req.body)
  res.redirect('/')

  
});

module.exports = Router;


