/**
 * Created by calvin on 10/27/16.
 */
"use strict";

var Sequelize = require('sequelize');
var logger = require('./logger');

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    pool: {
        minConnections: 0,
        maxConnections: 20,
        maxIdleTime: 20000
    },
    logging: function (str) {
        logger.silly(str)
    },
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    },
    query: {
        raw: true
    }
});
