'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Selected_datasController = controllers.Selected_datasController;

const Selected_datasRouter = express.Router();
//Selected_datasRouter.use(bodyParser.json());

Selected_datasRouter.get('/', function(req, res) {
    Selected_datasController.getAll()
    .then((Selected_datas) => {
        res.json(Selected_datas);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Selected_datasRouter.get('/:Selected_dataId', function(req, res) {
    Selected_datasController.getStatsFor(req.params.Selected_dataId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = Selected_datasRouter;
