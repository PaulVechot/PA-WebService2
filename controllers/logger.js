'use strict';

const ModelIndex = require('../models');
const fs = require('fs');
const config = require('../config');


const LoggerController = function() {};

LoggerController.dateFr = function(){
  const day = new Array(
                        "dimanche", "lundi", "mardi", "mercredi", "jeudi",
                        "vendredi", "samedi");
  const month = new Array(
                      "janvier", "fevrier", "mars", "avril", "mai", "juin",
                       "juillet", "aout", "septembre", "octobre", "novembre",
                       "decembre");
  const date = new Date();
  var message = day[date.getDay()] + " ";
  message += date.getDate() + " ";
  message += month[date.getMonth()] + " ";
  return message;
};

LoggerController.time = function(){
     const date = new Date();
     const hours = date.getHours();
     var minutes = date.getMinutes();
     if(minutes < 10){
          minutes = "0" + minutes;
    }
     return hours + "h" + minutes;
};
LoggerController.datetime = function(){
  var datetime = LoggerController.dateFr() + " "  +
                 LoggerController.time() + "\n";
  return datetime;
};

LoggerController.logOne = function(file, err_msg){
  fs.writeFile(
              config.log.log_location + file,
              LoggerController.datetime + err_msg + "\n",
              function (err){
                if(err){
                  throw err;
                }
              });
  console.log("an error occur, log in: " + config.log.log_location + file);
};

LoggerController.logAll = function(file, err_msg){
  fs.writeFile(
              config.log.logall_location,
              LoggerController.datetime + err_msg + "\n",
              function (err){
                if(err){
                  throw err;
                }
              });
};

LoggerController.log = function(file, err_msg){
  LoggerController.logAll(file, err_msg);
  LoggerController.logOne(file, err_msg);
};

module.exports = LoggerController;
