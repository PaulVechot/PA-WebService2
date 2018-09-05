'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const ConfiguationController = controllers.ConfiguationController;

const ConfiguationRouter = express.Router();
ConfiguationRouter.use(bodyParser.json());

ConfiguationRouter.get('/', function(req, res) {
    ConfiguationController.getAll()
    .then((Configuation) => {
        res.json(Configuation);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

ConfiguationRouter.get('/:resultId', function(req, res) {
    ConfiguationController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

ConfiguationRouter.post('/', function(req, res) {
  const id = req.body.id;
  const label = req.body.label;
  if(id === undefined || label === undefined) {
    res.status(400).end();
    return;
  }
  TaskController.add(parseInt(id), label)
  .then((configuration_set) => {
    res.status(201).json(configuration_set);
  })
  .catch((err) => {
    res.status(500).end();
  })
});


module.exports = ConfiguationRouter;
