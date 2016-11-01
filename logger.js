/**
 * Created by calvin on 10/27/16.
 */
"use strict";

const winston = require('winston');

const fileName = process.env.LOG_FILE || __dirname + '/logs/app.log';
winston.add(winston.transports.File, { filename: fileName });
//winston.remove(winston.transports.Console);

module.exports = winston;