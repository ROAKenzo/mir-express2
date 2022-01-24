/* const express = require('express');
const Router = express.Router(); */
import { Router } from 'express';
const router = Router();

import {
  getTasks,
  getAddTask,
  postAddTask,
} from '../controllers/tasks.controller.js';

router.get('/', getTasks);
router.route('/admin/add-task').get(getAddTask).post(postAddTask);

export default router;
