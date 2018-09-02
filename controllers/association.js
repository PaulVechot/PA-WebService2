'use strict';

const ModelIndex = require('../models');
const Association = ModelIndex.Association;

const AssociationController = function() {};

AssociationController.getAll = function() {
  Association.findAll().then(Association => {
    return JSON.stringify(Association);
  });
};
AssociationController.add = function(id, field1, field2) {
    return Association.create({
        id: id,
        field1: field1,
        field2: field2
    });
};

  module.exports = AssociationController;
