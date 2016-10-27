'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var sequelize = require('../db');
const fs = require('fs');
const logger = require('../logger');

function load(name) {
    return sequelize.import(path.join(__dirname, name));
}

let models = {
    sequelize: sequelize,
    db: sequelize, // alias
};

let fileList = fs.readdirSync(__dirname);
//logger.debug(fileList);
fileList.forEach(function(fileName) {
    //logger.debug(fileName);
    if (fileName !== 'index.js' && fileName.indexOf('.js') !== -1) {
        let modelName = fileName.split('.js')[0];
        models[modelName] = sequelize.import(path.join(__dirname, fileName));
        //logger.debug('import model', modelName);
    }
});

module.exports = models;


