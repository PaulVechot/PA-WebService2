'use strict';

const ModelIndex = require('../models');
const Analysis_result = ModelIndex.Analysis_result;

const Analysis_resultController = function() {};

Analysis_resultController.getAll = function() {
  Analysis_result.findAll().then(Analysis_result => {
    return JSON.stringify(Analysis_result);
  });
};
Analysis_resultController.add = function(id, datetime) {
    return Analysis_result.create({
        id: id,
        datetime: datetime
    });
};
/**
 * Gets stats related to an analysis result, based on result ID
 * @param {Integer} resultId - The ID of the result to get the stats of
 * @return {Object} A promise resolving to success when data fetched from DB
 */
Analysis_resultController.getStatsFor = function(resultId) {
    // TODO STUB
    return {
        'then': function (callback) {
            callback([
                {   'id': 1,
                    'label': 'ventes',
                    'representation': 'linechart',
                    'datasets': [
                        { 'label': 'labels', 'datatype': 'string', 'data': [
                            'Janv', 'Févr', 'Mars', 'Avri', 'Mai', 'Juin',
                            'Juil', 'Août', 'Sept', 'Octo', 'Nove', 'Déce'
                        ] },
                        { 'label': 'ventes', 'datatype': 'int', 'data': [
                            45, 54, 34, 62, 48, 53, 67, 63, 54, 42, 35, 28
                        ] }
                    ],
                },
                {   'id': 2,
                    'label': 'achats',
                    'representation': 'table',
                    'datasets': [
                        { 'label': 'labels', 'datatype': 'string', 'data': [
                            'date', 'fournisseur', 'article', 'qté', 'prix'
                        ] },
                        { 'label': 'date', 'datatype': 'date', 'data': [
                            '2017-03-23', '2017-05-18', '2017-09-27'
                        ] },
                        { 'label': 'fournisseur', 'datatype': 'string',
                            'data': [
                                'Alcatel', 'Matra', 'Cisco'
                            ]
                        },
                        { 'label': 'article', 'datatype': 'string', 'data': [
                            'switch fibre', 'serveur vidéo', 'routeur'
                        ] },
                        { 'label': 'qté', 'datatype': 'int', 'data': [
                            1, 2, 4
                        ] },
                        { 'label': 'prix', 'datatype': 'int', 'data': [
                            1000, 600, 400
                        ] },
                    ],
                }
            ]);
            return this;
        },
        'catch': function (callback) { /* NO ERROR WILL HAPPEN IN THE STUB */ }
    };
};

module.exports = Analysis_resultController;
