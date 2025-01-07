const express = require("express");
const router = express.Router();
const task = require('../task/task.controller')
router.post('/create_task', task.create_task)
router.get('/get_task', task.get_task)
module.exports = router;