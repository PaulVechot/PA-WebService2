'use strict'
module.exports = function (sequelize, DataTypes) {
    const Selected_data = sequelize.define('Selected_data', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        field: {
            type: DataTypes.STRING,
            allowNull: false
        },
        operation: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Selected_data.associate = _associate;
    return Selected_data;
};

// INTERNAL

function _associate(models) {

}
