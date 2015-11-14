//this helper module will take main-application and binds it with test data and returns helper-application

var testFlightsData = require('../data') //import test data
var app = require('../../app')//import main application

module.exports = app(testFlightsData) //call app with test data and export the result