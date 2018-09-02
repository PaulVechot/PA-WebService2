'use strict';

const ModelIndex = require('../models');
const Statistical_data = ModelIndex.Statistical_data;

const Statistical_dataController = function() {};

Statistical_dataController.getAll = function() {
  Statistical_data.findAll().then(Statistical_data => {
    return JSON.stringify(Statistical_data);
  });
};
Statistical_dataController.add = function(id, value) {
    return Statistical_data.create({
        id: id,
        value: value
    });
};

  module.exports = Statistical_dataController;
