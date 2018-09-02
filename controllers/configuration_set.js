'use strict';

const ModelIndex = require('../models');
const Configuration_set = ModelIndex.Configuration_set;

const Configuration_setController = function() {};

Configuration_setController.getAll = function() {
  Configuration_set.findAll().then(Configuration_set => {
    console.log(JSON.stringify(Configuration_set))
  });
};
Configuration_setController.add = function(id, label) {
    return Configuration_set.create({
        id: id,
        label: label
    });
};


  module.exports = Configuration_setController;
