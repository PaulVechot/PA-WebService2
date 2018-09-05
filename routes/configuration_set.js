'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Configuration_setController = controllers.Configuration_setController;

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
  const id = req.body.id;
  const label = req.body.label;
  if(id === undefined || label === undefined) {
   res.status(400).end();
    return;
  }
  Configuration_setController.add(parseInt(id), label)
  .then((configuration_set) => {
    res.status(201).json(configuration_set);
  })
  .catch((err) => {
    res.status(500).end();
  });
});


module.exports = ConfigurationRouter;
