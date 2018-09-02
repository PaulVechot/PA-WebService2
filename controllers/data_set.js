'use strict';

const ModelIndex = require('../models');
const Data_set = ModelIndex.Data_set;

const Data_setController = function() {};

Data_setController.getAll = function() {
  Data_set.findAll().then(Data_set => {
    return JSON.stringify(Data_set);
  });
};
Data_setController.add = function(id, label, data_type) {
    return Data_set.create({
        id: id,
        label: label,
        data_type: data_type
    });
};

  module.exports = Data_setController;
