'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');

const LoggerController = controllers.LoggerController;
const AssociationController = controllers.AssociationController;
const AssociationRouter = express.Router();

AssociationRouter.use(bodyParser.json());

AssociationRouter.get('/', function(req, res) {
    AssociationController.getAll()
    .then((Association) => {
        res.json(Association);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

AssociationRouter.get('/:resultId', function(req, res) {
    AssociationController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});
AssociationRouter.post('/', function(req, res) {
  //body entry
  const id = req.body.id;
  const field1 = req.body.field1;
  const field2 = req.body.field2;
  //check for undefined entry
  if(id === undefined || field1 === undefined || field2 === undefined ) {
   res.status(400).end();
   LoggerController.log("Association.txt", config.err.e400);
    return;
  }
  //add function
  AssociationController.add(parseInt(id), field1, field2)
  .then((Association) => {
    res.status(201).json(Association);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Association.txt", config.err.e500);
  });
});

module.exports = AssociationRouter;
