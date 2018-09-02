'use strict';

const ModelIndex = require('../models');
const Data_source = ModelIndex.Data_source;

const Data_sourceController = function() {};

Data_sourceController.getAll = function() {
  Data_source.findAll().then(Data_source => {
    return JSON.stringify(Data_source);
  });
};
Data_sourceController.add = function(id, label, type) {
    return Data_source.create({
        id: id,
        label: label,
        type: type
    });
};

  module.exports = Data_sourceController;
