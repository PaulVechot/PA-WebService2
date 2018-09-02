'use strict';

const ModelIndex = require('../models');
const Selected_data = ModelIndex.Selected_data;

const Selected_dataController = function() {};

Selected_dataController.getAll = function() {
  Selected_data.findAll().then(Selected_data => {
    return JSON.stringify(Selected_data);
  });
};
Selected_dataController.add = function(id, field, operation) {
    return Selected_data.create({
        id: id,
        field: field,
        operation: operation
    });
};

  module.exports = Selected_dataController;
