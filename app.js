"use strict";

const koa = require('koa');
const json = require('koa-json');

const app = koa();
app.use(json());

const fortuneRouter = require('./routes/fortune');
app.use(fortuneRouter.routes());

app.listen(process.env.PORT || 3000);

app.on('error', function(err, ctx){
    console.error('server error', err, ctx);
});

