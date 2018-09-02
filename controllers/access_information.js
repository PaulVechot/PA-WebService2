'use strict';

const ModelIndex = require('../models');
const Access_information = ModelIndex.Access_information;

const Access_informationController = function() {};

Access_informationController.getAll = function() {
  Access_information.findAll().then(Access_information => {
    return JSON.stringify(Access_information);
  });
};
Access_informationController.add = function(id, key, value) {
    return Access_information.create({
        id: id,
        key: key,
        value: value
    });
};

  module.exports = Access_informationController;
