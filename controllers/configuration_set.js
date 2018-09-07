'use strict';

const ModelIndex = require('../models');
const Configuration_set = ModelIndex.Configuration_set;

const Configuration_setController = function() {};

Configuration_setController.getAll = function() {
  return Configuration_set.findAll();
};
Configuration_setController.getId = function(label) {
  console.log(label);
  Configuration_set.findAll({
    where: {created_at: label}
  });
  };


//SELECT MAX(ID) from bugs WHERE user=Me


// Configuration_setController.getAll = function(search, limit, offset) {
//   const options = {
//     include: [{
//       model: ModelIndex.Task,
//       as: 'tasks',
//       include: [{
//         model: ModelIndex.User,
//         as: 'users'
//       }]
//     }]
//   };
//   const where = {};
//   if(search !== undefined) {
//     where.id = {
//       [Op.like]: `${search}%`
//     };
//   }
//   options.where = where;
//   if(limit !== undefined) {
//     options.limit = limit;
//   }
//   if(offset !== undefined) {
//     options.offset = offset;
//   }
//   return Configuration_setController.findAll(options);
// };
Configuration_setController.add = function(id, label) {
    return Configuration_set.create({
        id: id,
        label: label
    });
};


  module.exports = Configuration_setController;
