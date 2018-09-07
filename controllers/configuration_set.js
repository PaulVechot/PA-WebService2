'use strict';

const ModelIndex = require('../models');
const Configuration_set = ModelIndex.Configuration_set;

const Configuration_setController = function() {};

Configuration_setController.getAll = function() {
  return Configuration_set.findAll();
};
Configuration_setController.getId = function() {
  //console.log();
  var quer = "SELECT id from configuration_set cs1 where cs1.created_at=(SELECT MAX(cs2.created_at) from configuration_set cs2)";
  return ModelIndex.sequelize
    .query(quer,{ type: ModelIndex.sequelize.QueryTypes.SELECT})
    .then(function(row){
      console.log(row[0]);
      return row[0];
    });
}


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
Configuration_setController.add = function(label) {
    return Configuration_set.create({
        id: 0,
        label: label
    });
};


  module.exports = Configuration_setController;
