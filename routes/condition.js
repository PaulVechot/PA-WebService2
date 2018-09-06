'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');

const LoggerController = controllers.LoggerController;
const ConditionController = controllers.ConditionController;
const ConditionRouter = express.Router();
ConditionRouter.use(bodyParser.json());

ConditionRouter.get('/', function(req, res) {
    ConditionController.getAll()
    .then((Condition) => {
        res.json(Condition);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

ConditionRouter.post('/', function(req, res) {
  //body entry
  const id = req.body.id;
  const op_left = req.body.op_left;
  const comparison = req.body.comparison;
  const op_right = req.body.op_right;
  //check for undefined entry
  if(id === undefined || op_left === undefined || comparison === undefined ||
    op_right === undefined) {
   res.status(400).end();
   LoggerController.log("Condition.txt", config.err.e400);
    return;
  }
  //add function
  ConditionController.add(parseInt(id), op_left, comparison,op_right)
  .then((Condition) => {
    res.status(201).json(Condition);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Condition.txt", config.err.e500);
  });
});

module.exports = ConditionRouter;
