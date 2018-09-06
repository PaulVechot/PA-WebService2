'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');

const LoggerController = controllers.LoggerController;
const Configuration_setController = controllers.Configuration_setController;
const selected_dataController = controllers.Selected_dataController;
const Data_SourceController = controllers.Data_SourceController;
const Access_informationController = controllers.Access_informationController;
const ConditionController = controllers.ConditionController;
const AssociationController = controllers.AssociationController;

const ConfigurationRouter = express.Router();
ConfigurationRouter.use(bodyParser.json());

ConfigurationRouter.get('/', function(req, res) {
    Configuration_setController.getAll()
    .then((configuration_set) => {
        res.json(configuration_set);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

ConfigurationRouter.post('/', function(req, res) {
var toto = JSON.parse(JSON.stringify(req.body));
//console.log(toto);
for(var i = 0; i < toto.length; i++){
    console.log(toto[i]); // Object with id and time
}
  // const id = toto.id;
  // console.log(id);
  // console.log(toto.conditions.opLeft);
  // const label = req.body.label;
  //
  // const condition = req.body.conditions;
  // console.log(req.body);
  // console.log(req.body.conditions.opLeft);
  // const association = req.body.associations;
  // const selected_data = req.body.selectedData;
  // const data_Source = req.body.dataSources;
  // const access_information = req.body.accessInfo;
  console.log(condition.opLeft, condition.comparison, condition.opRight);
  if(id === undefined || label === undefined) {
   res.status(400).end();
   LoggerController.log("configuration_set.txt", config.err.e400);
    return;
  }
  Configuration_setController.add(parseInt(id), label)
  .then(ConditionController.add(condition, id))
  .then(AssociationController.add(association, id))
  .then(selected_dataController.add(selected_data, id))
  .then(Data_SourceController.add(data_Source, id))
  .then(Access_informationController.add(access_information, id))
  .then((configuration_set) => {
    res.status(201).json(configuration_set);
  })
  .catch((err) => {
    res.status(500).end();
    LoggerController.log("configuration_set.txt", config.err.e500);
  });
});


module.exports = ConfigurationRouter;
