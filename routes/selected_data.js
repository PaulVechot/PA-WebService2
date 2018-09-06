'use strict';

const express = require('express');
const config = require('../config');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Selected_dataController = controllers.Selected_dataController;
const LoggerController = controllers.LoggerController;
const Selected_dataRouter = express.Router();
Selected_dataRouter.use(bodyParser.json());

Selected_dataRouter.get('/', function(req, res) {
    Selected_dataController.getAll()
    .then((Selected_data) => {
        res.json(Selected_data);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Selected_dataRouter.post('/', function(req, res) {
  const id = req.body.id;
  const date_time = req.body.date_time;
  if(id === undefined || date_time === undefined) {
   res.status(400).end();
   LoggerController.log("Selected_data.txt", config.err.e400);
  return;
  }
  Selected_dataController.add(parseInt(id), date_time)
  .then((Selected_data) => {
    res.status(201).json(Selected_data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Selected_data.txt", config.err.e500);
  });
});


module.exports = Selected_dataRouter;
