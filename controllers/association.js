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

AssociationController.add = function(association, cfId) {
  for (var i = 0; i < association.length; i+=1) {
    Association.create({
       id: 0,
       field1: association[i].field1,
       field2: association[i].field2,
       Configuration_set_id: cfId
   });
  }
};

  module.exports = AssociationController;
