'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Access_informationController = controllers.Access_informationController;
const config = require('../config');
const LoggerController = controllers.LoggerController;
const Access_informationRouter = express.Router();
Access_informationRouter.use(bodyParser.json());

Access_informationRouter.get('/', function(req, res) {
    Access_informationController.getAll()
    .then((Access_information) => {
        res.json(Access_information);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Access_informationRouter.post('/', function(req, res) {
  const id = req.body.id;
  const key = req.body.key;
  const value = req.body.value;

  if(id === undefined || key === undefined || value === undefined) {
   res.status(400).end();
   LoggerController.log("Access_information.txt", config.err.e400);
  return;
  }
  Access_informationController.add(parseInt(id), key, value)
  .then((Access_information) => {
    res.status(201).json(Access_information);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("Access_information.txt", config.err.e500);
  });
});

module.exports = Access_informationRouter;
