// /web-service/session/login//logging in -

// /web-service/session/logout//logging out -


'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const SessionController = controllers.SessionController;
const UserController = controllers.UserController;
const config = require('../config');
const LoggerController = controllers.LoggerController;

const SessionRouter = express.Router();
SessionRouter.use(bodyParser.json());

SessionRouter.get('/', function(req, res) {
  res.json({
    message: 'welcome tt'
  });
});

SessionRouter.post('/', (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
  if(req.body.username === undefined || req.body.username === undefined) {
   res.status(400).end();
   LoggerController.log("analysis_result.txt", config.err.e400);
    return;
  }
  UserController.authorise(req.body.username, req.body.password)
  .then((session) => {
    res.status(201).json(session);
  })
  .catch((err) => {
    res.status(500).end();
    LoggerController.log("analysis_result.txt", config.err.e500);
  });
});

//
// SessionRouter.post('/', (req, res) => {
//   const user = {
//     username: req.username,
//     password: req.password
//   };
//   jwt.sign({user:user}, 'secretkey', (err, token)=> {
//       res.json({
//         token : token
//       });
//     });
// });


module.exports = SessionRouter;
