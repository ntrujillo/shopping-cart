'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('./product.ctrl');

router.route('/')
    .get(ctrl.query);

router.route('/:_id')
    .get(ctrl.get);



module.exports = router;