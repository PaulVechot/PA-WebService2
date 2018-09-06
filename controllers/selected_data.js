'use strict';

const ModelIndex = require('../models');
const Selected_data = ModelIndex.Selected_data;

const Selected_dataController = function() {};

Selected_dataController.getAll = function() {
  Selected_data.findAll().then(Selected_data => {
    return JSON.stringify(Selected_data);
  });
};
Selected_dataController.add = function(selected_data, id) {
    return Selected_data.create({
        id: 0,
        field: selected_data.field,
        operation: selected_data.operation,
        Configuration_set_id : id
    });
};

  module.exports = Selected_dataController;
