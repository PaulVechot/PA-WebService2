'use strict'
module.exports = function (sequelize, DataTypes) {
    const Data_set = sequelize.define('Data_set', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Data_set.associate = _associate;
    return Data_set;
};

// INTERNAL

function _associate(models) {
    models.Data_set.hasMany(models.Statistical_data, {foreignKey: 'Data_set_id'});

}
