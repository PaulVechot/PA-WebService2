'use strict'
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdvertised: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    User.associate = _associate;
    return User;
};

// INTERNAL

function _associate(models) {
  models.User.belongsToMany(models.Analysis_result, {
    as: 'User',
    through: 'Consults',
    foreignKey: 'User_id'
  });
}
