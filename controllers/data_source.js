'use strict';

const ModelIndex = require('../models');
const Data_source = ModelIndex.Data_source;

const Data_sourceController = function() {};

Data_sourceController.getAll = function() {
  Data_source.findAll().then(Data_source => {
    return JSON.stringify(Data_source);
  });
};
Data_sourceController.add = function(data_Source, id) {
    return Data_source.create({
        id: 0,
        label: data_Source.label,
        type: data_Source.type,
        Configuration_set_id : id
    });
};

  module.exports = Data_sourceController;
