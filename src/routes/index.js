const express = require("express");
const router = express.Router();
router.use('/auth', require('../controller/auth'))
router.use('/task', require('../controller/task'))
router.use('/time_tracking', require('../controller/time_tracking'))
router.use('/log', require('../controller/logs'))
module.exports = router;