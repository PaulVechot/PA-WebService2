'use strict';

const ModelIndex = require('../models');
const Selected_data = ModelIndex.Selected_data;

const Selected_dataController = function() {};

Selected_dataController.getAll = function() {
  Selected_data.findAll().then(Selected_data => {
    return JSON.stringify(Selected_data);
  });
};
Selected_dataController.add = function(selected_data, cfId) {
  for (var i = 0; i < selected_data.length; i+=1) {
     Selected_data.create({
        id: 0,
        field: selected_data[i].field,
        operation: selected_data[i].operation,
        Configuration_set_id : cfId
    });
  }
};

  module.exports = Selected_dataController;
