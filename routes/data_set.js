'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Data_setController = controllers.Data_setController;

const Data_setRouter = express.Router();
//Data_setRouter.use(bodyParser.json());

Data_setRouter.get('/', function(req, res) {
    Data_setController.getAll()
    .then((Data_set) => {
        res.json(Data_set);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Data_setRouter.get('/:resultId', function(req, res) {
    Data_setController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = Data_setRouter;
