'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Data_sourceController = controllers.Data_sourceController;
const config = require('../config');
const LoggerController = controllers.LoggerController;
const Data_sourceRouter = express.Router();
Data_sourceRouter.use(bodyParser.json());

Data_sourceRouter.get('/', function(req, res) {
    Data_sourceController.getAll()
    .then((Data_source) => {
        res.json(Data_source);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Data_sourceRouter.post('/', function(req, res) {
  const id = req.body.id;
  const label = req.body.date_time;
  const type = req.body.date_time;
  if(id === undefined || label === undefined || type === undefined) {
   res.status(400).end();
   LoggerController.log("Data_source.txt", config.err.e400);
  return;
  }
  Data_sourceController.add(parseInt(id), label, type)
  .then((Data_source) => {
    res.status(201).json(Data_source);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Data_source.txt", config.err.e500);
  });
});

module.exports = Data_sourceRouter;
