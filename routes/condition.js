'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const ConditionController = controllers.ConditionController;

const ConditionRouter = express.Router();
//ConditionRouter.use(bodyParser.json());

ConditionRouter.get('/', function(req, res) {
    ConditionController.getAll()
    .then((Condition) => {
        res.json(Condition);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

ConditionRouter.get('/:resultId', function(req, res) {
    ConditionController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = ConditionRouter;
