'use strict';

const ModelIndex = require('../models');
const Session = ModelIndex.Session;
const User = ModelIndex.User;
const SessionController = function() {};


SessionController.checker = function(user) {
    return User.find({
      where:{
        username: user.username,
        password: user.password
      }
    });
};


module.exports = SessionController;
