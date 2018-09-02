'use strict';

const ModelIndex = require('../models');
const Condition = ModelIndex.Condition;

const ConditionController = function() {};

ConditionController.getAll = function() {
  Condition.findAll().then(Condition => {
    return JSON.stringify(Condition);
  });
};
ConditionController.add = function(id, op_left, comparaison, op_right) {
    return Condition.create({
        id: id,
        op_left: op_left,
        comparaison: comparaison,
        op_right: op_right
    });
};

  module.exports = ConditionController;
