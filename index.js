/* const express = require('express');
const path = require('path');
const taskRoutes = require('./routes/task.routes'); */
import express from 'express';
import path from 'path';
import taskRoutes from './routes/task.routes.js';

const app = express();
const PORT = '3001';
const { pathname: publicFolder } = new URL(
  'C:/Users/Kenzo/Desktop/RIVALDO-/MakeItReal/mir-express2/express-plano/public',
  import.meta.url
);
//Body parser
app.use(express.urlencoded({ extended: true }));

//Serving public files
app.use(express.static(publicFolder));

//Define EJS as engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routes
app.use(taskRoutes);

app.use('/', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
  console.log('Listening on Port ' + PORT);
});
