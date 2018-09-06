'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('../controllers');
const config = require('../config');
const UserController = controllers.UserController;
const LoggerController = controllers.LoggerController;
const UserRouter = express.Router();
UserRouter.use(bodyParser.json());

UserRouter.get('/', function(req, res) {
    UserController.getAll()
    .then((User) => {
        res.json(User);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

UserRouter.post('/', function(req, res) {
  //body entry
  const id = req.body.id;
  const name = req.body.name;
  const password_hash = req.body.password_hash;
  const isAdvertised = req.body.isAdvertised;
  //check for undefined entry
  if(id === undefined || name === undefined || password_hash === undefined ||
     isAdvertised === undefined ) {
   res.status(400).end();
   LoggerController.log("User.txt", config.err.e400);
    return;
  }
  //add function
  UserController.add(parseInt(id), name, password_hash, isAdvertised)
  .then((User) => {
    res.status(201).json(User);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).end();
    LoggerController.log("User.txt", config.err.e500);
  });
});


module.exports = UserRouter;
