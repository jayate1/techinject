const express = require("express");
const router = express.Router();

const auth = require('./auth.controller')
router.post('/sign_up', auth.sign_up)
router.post('/sign_in', auth.sign_in)
module.exports = router;