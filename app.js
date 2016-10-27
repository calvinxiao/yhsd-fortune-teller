"use strict";

const koa = require('koa');
const json = require('koa-json');
const co = require('co');
const models = require('./models');
const logger = require('./logger');

co(function* () {
    yield models.db.sync();
    const app = koa();
    app.use(json());

    const fortuneRouter = require('./routes/fortune');
    app.use(fortuneRouter.routes());

    const suicideRouter = require('./routes/kill');
    app.use(suicideRouter.routes());

    app.listen(process.env.PORT || 3000);

    app.on('error', function(err, ctx){
        logger.error('server error', err, ctx);
    });
}).catch(err => {
    logger.error(err);
    process.exit(1);
});

