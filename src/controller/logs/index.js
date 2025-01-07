const express = require("express");
const router = express.Router();
const logs = require('../logs/logs.controller')
router.post('/create_logs', logs.create_log)
router.get('/get_logs', logs.get_logs)
module.exports = router;