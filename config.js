'use strict';

var config = {};

config.webapp = {};

config.webapp.dir = process.env.APP_DIR || '/var/www/app/';

module.exports = config;
