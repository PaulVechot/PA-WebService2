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
  for (var i = 0; i < condition.length; i++) {
    console.log(condition[i]);
    console.log(condition[i].opLeft);
    Condition.create({
       id: 0,
       op_left: condition[i].opLeft,
       comparison: condition[i].comparison,
       op_right: condition[i].opRight,
       Configuration_set_id: id
   });
  }
  req.body.conditions[0].opLeft

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
