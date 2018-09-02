'use strict';

const ModelIndex = require('../models');
const Stat = ModelIndex.Stat;

const StatController = function() {};

StatController.getAll = function() {
  Stat.findAll().then(Stat => {
    return JSON.stringify(Stat);
  });
};
StatController.add = function(id, label, representation ) {
    return Stat.create({
        id: id,
        label: label,
        representation: representation
    });
};

  module.exports = StatController;
