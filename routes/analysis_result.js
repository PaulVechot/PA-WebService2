'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Analysis_resultController = controllers.Analysis_resultController;

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
    });
});

Analysis_resultRouter.post('/', function(req, res) {
  const id = req.body.id;
  const date_time = req.body.date_time;
  console.log(id, date_time);
  if(id === undefined || date_time === undefined) {
   res.status(400).end();
    return;
  }
  Analysis_resultController.add(parseInt(id), date_time)
  .then((analysis_result) => {
    console.log(id, date_time);
    res.status(201).json(analysis_result);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
  });
});

module.exports = Analysis_resultRouter;
