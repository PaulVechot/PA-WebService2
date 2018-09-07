'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');
const busboyBodyParser = require('busboy-body-parser');


const LoggerController = controllers.LoggerController;
const Configuration_setController = controllers.Configuration_setController;
const selected_dataController = controllers.Selected_dataController;
const Data_SourceController = controllers.Data_SourceController;
const Access_informationController = controllers.Access_informationController;
const ConditionController = controllers.ConditionController;
const AssociationController = controllers.AssociationController;

const ConfigurationRouter = express.Router();
ConfigurationRouter.use(bodyParser.json());
//ConfigurationRouter.use(busboyBodyParser({multi: true}));
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
  const id = req.body.id;
  const label = req.body.label;
  const condition = req.body.conditions;
  const association = req.body.associations;
  const selected_data = req.body.selectedData;
  const data_Source = req.body.dataSources;
  const access_information = req.body.accessInfo;
  if(id === undefined || label === undefined) {
   res.status(400).end();
   LoggerController.log("configuration_set.txt", config.err.e400);
    return;
  }
  Configuration_setController.add(parseInt(id), label)
  console.log(label)
  configuration_setID = Configuration_setController.getId(label)
  console.log(configuration_setID)
  .then(ConditionController.add(condition, configuration_setID))
  .then(AssociationController.add(association, configuration_setID))
  .then(selected_dataController.add(selected_data, configuration_setID))
  .then(Data_SourceController.add(data_Source, configuration_setID))
  .then(Access_informationController.add(access_information, configuration_setID))
  .then((configuration_set) => {
    res.status(201).json(configuration_set);
  })
  .catch((err) => {
    res.status(500).end();
    LoggerController.log("configuration_set.txt", config.err.e500);
  });
});


module.exports = ConfigurationRouter;
