'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const StatsController = controllers.StatsController;

const StatsRouter = express.Router();
//StatsRouter.use(bodyParser.json());

StatsRouter.get('/', function(req, res) {
    StatsController.getAll()
    .then((Stats) => {
        res.json(Stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

StatsRouter.get('/:StatId', function(req, res) {
    StatsController.getStatsFor(req.params.StatId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = StatsRouter;
