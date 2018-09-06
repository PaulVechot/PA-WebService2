// /web-service/session/login//logging in -

// /web-service/session/logout//logging out -


'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const SessionController = controllers.SessionController;

const SessionRouter = express.Router();
SessionRouter.use(bodyParser.json());
//AssociationRouter.use(bodyParser.json());

SessionRouter.get('/', function(req, res) {
  res.json({
    message: 'welcome tt'
  });
});

SessionRouter.post('/', (req, res) => {
  SessionController.checker(req.body.username,req.body.password)
  .then((session) => {
    res.status(201).json(session);
  })
  .catch((err) => {
    res.status(500).end();
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
