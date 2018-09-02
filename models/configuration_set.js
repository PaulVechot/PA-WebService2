'use strict'
module.exports = function (sequelize, DataTypes) {
    const Configuration_set = sequelize.define('Configuration_set', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    Configuration_set.associate = _associate;
    return Configuration_set;
};

// INTERNAL

function _associate(models) {
  models.Configuration_set.hasMany(models.Association, {foreignKey: 'Configuration_set_id'});
  models.Configuration_set.hasMany(models.Condition, {foreignKey: 'Configuration_set_id'});
  models.Configuration_set.hasMany(models.Selected_data, {foreignKey: 'Configuration_set_id'});

  models.Configuration_set.hasMany(models.Analysis_result, {foreignKey: 'Configuration_set_id'});

  models.Configuration_set.belongsToMany(models.Data_source, {through: 'Configuration_set_data_source', foreignKey: 'Configuration_set_id'});


}
