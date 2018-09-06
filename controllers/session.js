'use strict';

const ModelIndex = require('../models');
const User = ModelIndex.User;

const SessionController = function() {};


SessionController.authorise = function(username, password) {
    return User.findall({
      where:{
        username: username,
        password: password
      }
    });
};


module.exports = SessionController;
