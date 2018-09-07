'use strict';

const controllers = require('../controllers');
const ModelIndex = require('../models');

const Data_source = ModelIndex.Data_source;
const Access_informationController = controllers.Access_informationController;

const Data_sourceController = function() {};

Data_sourceController.getAll = function() {
  Data_source.findAll().then(Data_source => {
    return JSON.stringify(Data_source);
  });
};

Data_sourceController.add = function(data_Source, cfId) {
  console.log("during dataSource...");
  for (var i = 0; i < data_Source.length; i+=1) {
    Data_source.create({
        id: 0,
        label: data_Source[i].label,
        type: data_Source[i].type,
        Configuration_set_id : cfId
    }).then(result => {
        //Access_informationController.add(data_Source[i].accessInfo, result.id);
    });

  }
};

  module.exports = Data_sourceController;
