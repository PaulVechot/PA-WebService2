'use strict';

const express = require('express');
const config = require('../config');

const RouteManager = function() { };

RouteManager.attach = function(app) {
    app.use('/web-service/access_information', require('./access_information'));
    app.use('/web-service/analysis_result', require('./analysis_result'));
    app.use('/web-service/association', require('./association'));
    app.use('/web-service/condition', require('./condition'));
    app.use('/web-service/configuration_set', require('./configuration_set'));
    app.use('/web-service/data_source', require('./data_source'));
    app.use('/web-service/selected_data', require('./selected_data'));
    app.use('/web-service/stat', require('./stat'));
    app.use('/web-service/session', require('./session'));
    app.use('/web-service/statistical_data', require('./statistical_data'));
    app.use('/web-service/user', require('./user'));
    app.use('/', express.static(config.webapp.dir));
};

module.exports = RouteManager;
