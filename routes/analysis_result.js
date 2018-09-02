'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Analysis_resultController = controllers.Analysis_resultController;

const Analysis_resultRouter = express.Router();
//Analysis_resultRouter.use(bodyParser.json());

Analysis_resultRouter.get('/', function(req, res) {
    Analysis_resultController.getAll()
    .then((projects) => {
        res.json(projects);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Analysis_resultRouter.get('/:resultId', function(req, res) {
    Analysis_resultController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = Analysis_resultRouter;
