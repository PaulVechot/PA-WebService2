'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Access_informationController = controllers.Access_informationController;

const Access_informationRouter = express.Router();
//Access_informationRouter.use(bodyParser.json());

Access_informationRouter.get('/', function(req, res) {
    Access_informationController.getAll()
    .then((Access_information) => {
        res.json(Access_information);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Access_informationRouter.get('/:resultId', function(req, res) {
    Access_informationController.getStatsFor(req.params.resultId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = Access_informationRouter;
