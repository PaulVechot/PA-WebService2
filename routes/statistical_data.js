'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');

const Statistical_dataController = controllers.Statistical_dataController;
const LoggerController = controllers.LoggerController;
const Statistical_dataRouter = express.Router();
Statistical_dataRouter.use(bodyParser.json());

Statistical_dataRouter.get('/', function(req, res) {
    Statistical_dataController.getAll()
    .then((Statistical_data) => {
        res.json(Statistical_data);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});
Statistical_dataRouter.post('/', function(req, res) {
  //body entry
  const id = req.body.id;
  const value = req.body.value;
  //check for undefined entry
  if(id === undefined || value === undefined) {
   res.status(400).end();
   LoggerController.log("Statistical_data.txt", config.err.e400);
    return;
  }
  //add function
  Statistical_dataController.add(parseInt(id), value)
  .then((Statistical_data) => {
    res.status(201).json(Statistical_data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Statistical_data.txt", config.err.e500);
  });
});

module.exports = Statistical_dataRouter;
