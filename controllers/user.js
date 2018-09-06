
'use strict';

const ModelIndex = require('../models');
const User = ModelIndex.User;

const UserController = function() {};

UserController.getAll = function() {
  User.findAll().then(User => {
    return JSON.stringify(User);
  });
};
UserController.add = function(id, name, password_hash, isAdvertised) {
    return User.create({
        id: id,
        name: name,
        password_hash: password_hash,
        isAdvertised:isAdvertised
    });
};
UserController.authorise = function(username, password) {
    return User.find({
      where:{
        name: username,
        password_hash: password
      }
    });
};

  module.exports = UserController;
