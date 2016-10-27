/**
 * Created by calvin on 10/27/16.
 */

'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('fortune', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        text: {
            allowNull: true,
            type: DataTypes.TEXT,
            comment: 'fortune text'
        },
        up: {
            allowNull: true,
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: 'up votes'
        },
        down: {
            allowNull: true,
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: 'down votes',
        },
    });
};
