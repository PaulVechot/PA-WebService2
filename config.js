'use strict';

var config = {};

//Webservice configuration
config.webapp = {};
config.webapp.dir = process.env.APP_DIR || 'E:/Documents/GitHub/PA-StatViewer';
config.webapp.port = '8080';


//Database acces configuration
config.db = {};
config.db.name = 'project-sample';
config.db.login = 'root';
config.db.password = 'root';
config.db.host = 'localhost';
config.db.dialect = 'mysql';
config.db.port = '3306';


module.exports = config;
