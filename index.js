const express = require('express');
const app = express();
const port = "3001";
const path = require("path");
var Router = require('./routes/tareas.router');
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"public")))
//both index.js and things.js should be in same directory
app.use('/', Router);


app.listen(port,() => {
  console.log("Desde el puerto "+port)
})