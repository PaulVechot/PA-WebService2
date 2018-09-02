// /web-service/session/login//logging in -
//
// /web-service/session/logout//logging out -
//
//
// 'use strict';
//
// const express = require('express');
// //const bodyParser = require('body-parser');
// const controllers = require('../controllers');
// const AssociationController = controllers.AssociationController;
//
// const AssociationRouter = express.Router();
// //AssociationRouter.use(bodyParser.json());
//
// AssociationRouter.get('/', function(req, res) {
//     AssociationController.getAll()
//     .then((Association) => {
//         res.json(Association);
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).end();
//     });
// });
//
// AssociationRouter.get('/:resultId', function(req, res) {
//     AssociationController.getStatsFor(req.params.resultId)
//     .then((stats) => {
//         res.json(stats);
//     })
//     .catch((err) => {
//         console.error(err);
//         res.status(500).end();
//     });
// });
//
// module.exports = AssociationRouter;
