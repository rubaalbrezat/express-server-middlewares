'use strict';

require('dotenv').config();
const {start} = require('./server');



start(process.env.PORT);