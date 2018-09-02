'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const UsersController = controllers.UsersController;

const UsersRouter = express.Router();
//UsersRouter.use(bodyParser.json());

UsersRouter.get('/', function(req, res) {
    UsersController.getAll()
    .then((Users) => {
        res.json(Users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

UsersRouter.get('/:UserId', function(req, res) {
    UsersController.getStatsFor(req.params.UserId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = UsersRouter;
