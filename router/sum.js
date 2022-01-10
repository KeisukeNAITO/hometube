'use strict';

const { logger } = require('../lib/logger');
const router = require('express').Router();
const sumLogic = require('../logics/sum');

router.route('/').get(function (req, res) {
    logger.info('[GET] API Access "/sum"');
    res.status(200).send(String(sumLogic(req.query)));
});

module.exports = router;
