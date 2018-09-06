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
AssociationController.add = function(id, field1, field2) {
    return Association.create({
        id: id,
        field1: field1,
        field2: field2
    });
};
AssociationController.log = function(){
  const date = Date.now();
  fs.writeFile(config.log.location + "association", date , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
};

  module.exports = AssociationController;
