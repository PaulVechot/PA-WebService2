'use strict'
module.exports = function (sequelize, DataTypes) {
    const Analysis_result = sequelize.define('Analysis_result', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        datatime: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Analysis_result.associate = _associate;
    return Analysis_result;
};

// INTERNAL

function _associate(models) {
  models.Analysis_result.hasMany(models.Stat, {foreignKey: 'Analysis_result_id'});
  models.Analysis_result.belongsToMany(models.User, {
  as: 'Analysis_result',
  through: 'Consults',
  foreignKey: 'Analysis_result_id'
  });
}
