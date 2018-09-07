'use strict';

const ModelIndex = require('../models');
const Condition = ModelIndex.Condition;

const ConditionController = function() {};

ConditionController.getAll = function() {
  Condition.findAll().then(Condition => {
    return JSON.stringify(Condition);
  });
};

ConditionController.add = function(condition,cfId) {
  for (var i = 0; i < condition.length; i+=1) {
    Condition.create({
       id: 0,
       op_left: condition[i].opLeft,
       comparison: condition[i].comparison,
       op_right: condition[i].opRight,
       Configuration_set_id: cfId
   });
  }
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
