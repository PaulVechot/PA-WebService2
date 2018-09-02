'use strict'
module.exports = function (sequelize, DataTypes) {
    const Statistical_data = sequelize.define('Statistical_data', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Statistical_data.associate = _associate;
    return Statistical_data;
};

// INTERNAL

function _associate(models) {

}
