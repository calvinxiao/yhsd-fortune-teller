/**
 * Created by calvin on 10/27/16.
 */

"use strict";

const router = require('koa-router')();
const fortune = require('fortune-teller');
const utils = require('../utils');

router.prefix('/fortune');

router.get('/', function* () {
    const whatHeSaid = fortune.fortune();
    const md5 = utils.md5(whatHeSaid);
  this.body = {
      md5: md5,
      fortune: fortune.fortune()
  }
});

router.post('/:md5', function* () {
  throw new Error('Not Implemented.');
});

module.exports = router;
