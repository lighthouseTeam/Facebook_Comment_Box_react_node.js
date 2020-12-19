const express = require('express');
const router = express.Router();
const allDataController = require('../controllers/allDataController')

router.get('/', allDataController.allSend)

module.exports= router;

