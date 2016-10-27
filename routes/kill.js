/**
 * Created by calvin on 10/27/16.
 */

"use strict";

const router = require('koa-router')();
const logger = require('../logger');

router.post('/kill', function* () {
    logger.warn('I am killing myself');
    this.body = {
        message: 'I am killing myself in 5s'
    };
    setTimeout(() => {
        process.exit(0);
    }, 5000)

});

module.exports = router;