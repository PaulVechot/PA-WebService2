'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const ConfiguationController = controllers.ConfiguationController;

const ConfiguationRouter = express.Router();
//ConfiguationRouter.use(bodyParser.json());

ConfiguationRouter.get('/', function(req, res) {
    ConfiguationController.getAll()
    .then((Configuation) => {
        res.json(Configuation);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

ConfiguationRouter.get('/:resultId', function(req, res) {
    ConfiguationController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = ConfiguationRouter;
