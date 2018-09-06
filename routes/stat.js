'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const StatsController = controllers.StatsController;
const config = require('../config');
const LoggerController = controllers.LoggerController;

const StatsRouter = express.Router();
StatsRouter.use(bodyParser.json());

StatsRouter.get('/', function(req, res) {
    StatsController.getAll()
    .then((Stats) => {
        res.json(Stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

StatsRouter.post('/', function(req, res) {
  const id = req.body.id;
  const label = req.body.label;
  const representation = req.body.representation;
  if(id === undefined || label === undefined || representation === undefined) {
   res.status(400).end();
   LoggerController.log("Stats.txt", config.err.e400);
  return;
  }
  StatsController.add(parseInt(id), label,representation)
  .then((Stats) => {
    res.status(201).json(Stats);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Stats.txt", config.err.e500);
  });
});


module.exports = StatsRouter;
