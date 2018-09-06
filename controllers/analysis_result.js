'use strict';

const ModelIndex = require('../models');
const fs = require('fs');
const config = require('../config');
const Analysis_result = ModelIndex.Analysis_result;

const Analysis_resultController = function() {};

Analysis_resultController.getAll = function() {
  Analysis_result.findAll().then(Access_information => {
    return JSON.stringify(Access_information);
  });
};
  // // TODO STUB
  //     return {
  //         'then': function (callback) {
  //             callback([
  //                 {   'id': 1,
  //                     'date': '2018-01-23',
  //                     'configset': 'Ventes 2017',
  //                     'datasources': [ { 'label': 'bdd_ventes' } ],
  //                 },
  //                 {   'id': 2,
  //                     'date': '2018-02-15',
  //                     'configset': 'Résultat 2017',
  //                     'datasources': [ { 'label': 'bdd_ventes' },
  //                                      { 'label': 'bdd_achats' } ],
  //                 }
  //             ]);
  //             return this;
  //         },
  //       
  //     };
  // };
Analysis_resultController.add = function(id, date_time) {
    return Analysis_result.create({
        id: id,
        date_time: date_time
    });
};

// Analysis_resultController.getStatsFor = function(resultId) {
//     // TODO STUB
//     return {
//         'then': function (callback) {
//             callback([
//                 {   'id': 1,
//                     'label': 'ventes',
//                     'representation': 'linechart',
//                     'datasets': [
//                         { 'label': 'labels', 'datatype': 'string', 'data': [
//                             'Janv', 'Févr', 'Mars', 'Avri', 'Mai', 'Juin',
//                             'Juil', 'Août', 'Sept', 'Octo', 'Nove', 'Déce'
//                         ] },
//                         { 'label': 'ventes', 'datatype': 'int', 'data': [
//                             45, 54, 34, 62, 48, 53, 67, 63, 54, 42, 35, 28
//                         ] }
//                     ],
//                 },
//                 {   'id': 2,
//                     'label': 'achats',
//                     'representation': 'table',
//                     'datasets': [
//                         { 'label': 'labels', 'datatype': 'string', 'data': [
//                             'date', 'fournisseur', 'article', 'qté', 'prix'
//                         ] },
//                         { 'label': 'date', 'datatype': 'date', 'data': [
//                             '2017-03-23', '2017-05-18', '2017-09-27'
//                         ] },
//                         { 'label': 'fournisseur', 'datatype': 'string',
//                             'data': [
//                                 'Alcatel', 'Matra', 'Cisco'
//                             ]
//                         },
//                         { 'label': 'article', 'datatype': 'string', 'data': [
//                             'switch fibre', 'serveur vidéo', 'routeur'
//                         ] },
//                         { 'label': 'qté', 'datatype': 'int', 'data': [
//                             1, 2, 4
//                         ] },
//                         { 'label': 'prix', 'datatype': 'int', 'data': [
//                             1000, 600, 400
//                         ] },
//                     ],
//                 }
//             ]);
//             return this;
//         },
//
//     };
// };

module.exports = Analysis_resultController;
