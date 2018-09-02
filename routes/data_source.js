'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Data_sourceController = controllers.Data_sourceController;

const Data_sourceRouter = express.Router();
//Data_sourceRouter.use(bodyParser.json());

Data_sourceRouter.get('/', function(req, res) {
    Data_sourceController.getAll()
    .then((projects) => {
        res.json(projects);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Data_sourceRouter.get('/:resultId', function(req, res) {
    Data_sourceController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = Data_sourceRouter;
