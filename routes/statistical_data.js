'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const controllers = require('../controllers');
const Statistical_datasController = controllers.Statistical_datasController;

const Statistical_datasRouter = express.Router();
//Statistical_datasRouter.use(bodyParser.json());

Statistical_datasRouter.get('/', function(req, res) {
    Statistical_datasController.getAll()
    .then((Statistical_datas) => {
        res.json(Statistical_datas);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

Statistical_datasRouter.get('/:Statistical_dataId', function(req, res) {
    Statistical_datasController.getStatsFor(req.params.Statistical_dataId)
    .then((stats) => {
        res.json(stats);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).end();
    });
});

module.exports = Statistical_datasRouter;
