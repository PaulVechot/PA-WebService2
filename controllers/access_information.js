'use strict';

const ModelIndex = require('../models');
const Access_information = ModelIndex.Access_information;

const Access_informationController = function() {};

Access_informationController.getAll = function() {
  Access_information.findAll().then(Access_information => {
    return JSON.stringify(Access_information);
  });
};
Access_informationController.add = function(access_information, id) {
    return Access_information.create({
        id: 0,
        key: access_information.key,
        value: access_information.value,
        Configuration_set_id : id
    });
};

  module.exports = Access_informationController;
