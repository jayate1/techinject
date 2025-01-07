const express = require("express");
const router = express.Router();
const time_tracking = require('../time_tracking/time_tracking.controller')
router.post('/create_tracking', time_tracking.time_track)
router.get('/get_tracking', time_tracking.get_time_track)
module.exports = router;