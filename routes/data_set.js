'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');
const Data_setController = controllers.Data_setController;
const LoggerController = controllers.LoggerController;
const Data_setRouter = express.Router();
Data_setRouter.use(bodyParser.json());

Data_setRouter.get('/', function(req, res) {
    Data_setController.getAll()
    .then((Data_set) => {
        res.json(Data_set);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Data_setRouter.post('/', function(req, res) {
  const id = req.body.id;
  const label = req.body.label;
  const data_type = req.body.data_type;
  if(id === undefined || label === undefined || data_type === undefined) {
   res.status(400).end();
   LoggerController.log("Data_set.txt", config.err.e400);
  return;
  }
  Data_setController.add(parseInt(id), label, data_type)
  .then((Data_set) => {
    res.status(201).json(Data_set);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Data_set.txt", config.err.e500);
  });
});

module.exports = Data_setRouter;
