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

//Log Configuration
config.log = {};

//For each table
config.log.log_location = "E:/Documents/GitHub/PA-WebService2/log/";
config.log.logall_location = "E:/Documents/GitHub/PA-WebService2/log/logall.txt";
module.exports = config;

//error message
config.err = {};

config.err.e500 = "High chance, already present";
config.err.e400 = "High chance, entry undefined";
