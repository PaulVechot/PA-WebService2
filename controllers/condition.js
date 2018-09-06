'use strict';

const ModelIndex = require('../models');
const Condition = ModelIndex.Condition;

const ConditionController = function() {};

ConditionController.getAll = function() {
  Condition.findAll().then(Condition => {
    return JSON.stringify(Condition);
  });
};
ConditionController.add = function(condition, id) {
  console.log(condition)
  console.log(condition.opLeft, condition.comparison, condition.opRight);
  
    return Condition.create({
        id: 0,
        op_left: condition.opLeft,
        comparison: condition.comparison,
        op_right: condition.opRight,
        Configuration_set_id: id
    });
};

// var user = {name: 'Corbin', age: 20, location: 'USA'},
//     key;
//
// for (key in user) {
//     if (user.hasOwnProperty(key)) {
//         console.log(key + " = " + user[key]);
//     }
// }

  module.exports = ConditionController;
