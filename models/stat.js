'use strict'
module.exports = function (sequelize, DataTypes) {
    const Stat = sequelize.define('Stat', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        representation: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Stat.associate = _associate;
    return Stat;
};

// INTERNAL

function _associate(models) {
  models.Stat.hasMany(models.Data_set, {foreignKey: 'Stat_id'});
}
