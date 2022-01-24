/* const path = require('path');
const Task = require('../models/tasks.model'); */
import path from 'path';
import Task from '../models/tasks.model.js';

const getAddTask = (req, res, next) => {
  res.render('add-task', {
    pageTitle: 'Add Task',
    path: '/admin/add-task',
    formsCSS: true,
    taskCSS: true,
    activeAddTask: true,
  });
};

const postAddTask = (req, res, next) => {
  const { title } = req.body;
  const task = new Task(title);

  task.save();
  res.redirect('/');
};
const getTasks = (req, res, next) => {
  Task.fetchAll().then((tasks) => {
    res.render('task', {
      tasks: tasks,
      pageTitle: 'Task',
      path: '/',
      hasTasks: tasks.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
export { getAddTask, postAddTask, getTasks };
