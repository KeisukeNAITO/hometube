'use strict';

const express = require('express');
const index = express();

index.use('/', require('./root'));
index.use('/sum', require('./sum'));

module.exports = index;
