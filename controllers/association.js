'use strict';

const ModelIndex = require('../models');
const fs = require('fs');
const config = require('../config');
const Association = ModelIndex.Association;


const AssociationController = function() {};

AssociationController.getAll = function() {
  Association.findAll().then(Association => {
    return JSON.stringify(Association);
  });
};
AssociationController.add = function(association, id) {
    return Association.create({
        id: 0,
        field1: association.field1,
        field2: association.field2,
        Configuration_set_id : id
    });
};

  module.exports = AssociationController;
