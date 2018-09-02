'use strict'
module.exports = function (sequelize, DataTypes) {
    const Access_information = sequelize.define('Access_information', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true, //If true, only non-deleted records will be updated. If false, both deleted and non-deleted records will be updated. Only applies if options.paranoid is true for the model.
        underscored: true, // Converts all camelCased columns to underscored if true. Will not affect timestamp fields named explicitly by model options and will not affect fields with explicitly set field option
        freezeTableName: true // If freezeTableName is true, sequelize will not try to alter the model name to get the table name. Otherwise, the model name will be pluralized
    });
    Access_information.associate = _associate;
    return Access_information;
};

// INTERNAL

function _associate(models) {}
