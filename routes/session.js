// /web-service/session/login//logging in -

// /web-service/session/logout//logging out -


'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const controllers = require('../controllers');
const bodyParser = require('body-parser');
const SessionControler = controllers.SessionController;

const SessionRouter = express.Router();
SessionRouter.use(bodyParser.json());
//AssociationRouter.use(bodyParser.json());

SessionRouter.get('/', function(req, res) {
  res.json({
    message: 'welcome tt'
  });
});
SessionRouter.post('/', (req, res) => {
  console.log(req);
  const user = {
    username: req.body.username,
    password: req.body.password
  };
  if ((user.username === 'paul.vechot@gmail.com') && (user.password === 'toto')) {
    res.json({
      message: 'ok'
    });

  }
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
