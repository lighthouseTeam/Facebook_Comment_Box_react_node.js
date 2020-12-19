const express = require('express');
const router = express.Router();
const updateController = require('../controllers/updateController')

router.post('/:id', updateController.delete)

module.exports= router;

