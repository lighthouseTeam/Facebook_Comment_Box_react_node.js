const express = require('express');
const router = express.Router();

const formRegister= require('./formRegister');
const allDataRequest= require('./allDataRequest');
const deleteComment = require('./deleteComment');
const updateComment = require('./updateComment');

router.use('/', formRegister)
router.use('/api', allDataRequest);
router.use('/delete', deleteComment);
router.use('/update', updateComment);

module.exports= router;
