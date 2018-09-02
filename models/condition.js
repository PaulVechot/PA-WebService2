'use strict'
module.exports = function (sequelize, DataTypes) {
    const Condition = sequelize.define('Condition', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        op_left: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comparison: {
            type: DataTypes.STRING,
            allowNull: false
        },
        op_right: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Condition.associate = _associate;
    return Condition;
};

// INTERNAL

function _associate(models) {

}
