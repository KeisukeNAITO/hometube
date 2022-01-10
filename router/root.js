'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();

router
    .route('/')
    .get(function (req, res) {
        logger.info('[GET] API Access "/"');
        res.send('read');
    })
    .post(function (req, res) {
        logger.info('[POST] API Access "/"');
        res.send('create');
    })
    .put(function (req, res) {
        logger.info('[PUT] API Access "/"');
        res.send('update');
    })
    .delete(function (req, res) {
        logger.info('[DELETE] API Access "/"');
        res.send('delete');
    });

module.exports = router;
