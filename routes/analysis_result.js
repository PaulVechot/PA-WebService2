'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');

const Analysis_resultController = controllers.Analysis_resultController;
const LoggerController = controllers.LoggerController;
const Analysis_resultRouter = express.Router();

Analysis_resultRouter.use(bodyParser.json());

Analysis_resultRouter.get('/', function(req, res) {
    Analysis_resultController.getAll()
    .then((analysis_result) => {
        res.json(analysis_result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
        LoggerController.log("analysis_result.txt", config.err.e500);
    });
});

Analysis_resultRouter.post('/', function(req, res) {
  const id = req.body.id;
  const date_time = req.body.date_time;
  if(id === undefined || date_time === undefined) {
   res.status(400).end();
   LoggerController.log("analysis_result.txt", config.err.e400);
  return;
  }
  Analysis_resultController.add(parseInt(id), date_time)
  .then((analysis_result) => {
    res.status(201).json(analysis_result);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("analysis_result.txt", config.err.e500);
  });
});

module.exports = Analysis_resultRouter;
