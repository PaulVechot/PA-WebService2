'use strict';

const ModelIndex = require('../models');
const Access_information = ModelIndex.Access_information;

const Access_informationController = function() {};

Access_informationController.getAll = function() {
  Access_information.findAll().then(Access_information => {
    return JSON.stringify(Access_information);
  });
};
Access_informationController.add = function(access_information, dsId) {
  for (var i = 0; i < access_information.length; i+=1) {
    Access_information.create({
        id: 0,
        key: access_information[i].key,
        value: access_information[i].value,
        Data_source_id : dsId
    });
  }
};

  module.exports = Access_informationController;
