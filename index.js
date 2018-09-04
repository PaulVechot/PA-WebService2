'use strict';

const express = require('express');
const ModelIndex = require('./models');
const RouteManager = require('./routes');
const config = require('./config');

ModelIndex
.openDatabase()
.then(_startServer)
.catch((err) => {
    console.error(err);
});

//_startServer();

// INTERNAL

function _startServer() {

    const app = express();

    RouteManager.attach(app);

    app.listen(config.webapp.port, function() {
        console.log('Server started on ' + config.webapp.port + '...');
    });
}
