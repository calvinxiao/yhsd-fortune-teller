/**
 * Created by calvin on 10/27/16.
 */

"use strict";

const router = require('koa-router')();
const logger = require('../logger');
const Redis = require('ioredis');
const redisUrl = process.env.REDIS_URL; //redis://:authpassword@127.0.0.1:6380/4
if (!redisUrl) {
    throw new Error('no env REDIS_URL');
}

let redis = null;
function getRedis() {
    if (!redis) {
        redis = new Redis(redisUrl);
    }

    return redis;
}

router.post('/redis', function* () {
    const redisClient = getRedis();
    yield redisClient.setex('foo', 10, 'bar');
    this.body = {};
});

module.exports = router;