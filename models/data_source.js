'use strict'
module.exports = function (sequelize, DataTypes) {
    const Data_source = sequelize.define('Data_source', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Data_source.associate = _associate;
    return Data_source;
};

// INTERNAL

function _associate(models) {
models.Data_source.hasMany(models.Access_information, {foreignKey: 'Data_source_id'});
models.Data_source.belongsToMany(models.Configuration_set, {through: 'Configuration_set_Data_source', foreignKey: 'Data_source_id'});
}
