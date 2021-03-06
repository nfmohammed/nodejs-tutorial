
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(function(req, res, next){
        res.set('X-Powered-By','Flight Tracker');
        next(); //if this is missing then application will not start correctly
});
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/flight/:number', routes.flight); //number is a variable
app.put('/flight/:number/arrived',routes.arrived) //new service has verb arrived in the end
app.get('/list',routes.list);
app.get('/list/json',routes.listjson);
app.get('/list/incorrectjson',routes.listIncorrectJson);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
