'use strict'
module.exports = function (sequelize, DataTypes) {
    const Association = sequelize.define('Association', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        field1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        field2: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Association.associate = _associate;
    return Association;
};

// INTERNAL

function _associate(models) {}
