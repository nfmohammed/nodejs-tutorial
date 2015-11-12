### Decoupling Code - for better testing

- The code in all the previous tutorials are tightly coupled i.e. 
    - data is directly imported in routes module rather than passing the data set to it.
    - application and server code is present in same file *app.js*

- It will be easier to unit test this code if we decouble the code

- To install dependencies `npm install`

#### creating separate server files

- Lets create a new entry point in our application i.e **server.js** and move the http code into this file.
    - The app module will then need to be imported into server.js file
    - The app object need to be returned from app.js file

- To check if server starts after these change, use `node server.js`

- routes/index.js code: same as in chapter10 

- server.js code:
        
        var http = require('http'),
        app = require('./app'); 
        http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
        });

- app.js code:

        var express = require('express');
        var routes = require('./routes');

        var path = require('path');

        var app = express();

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

        module.exports = app //output app object


#### separating data from routes module

- Previously we directly imported data into routes module. But ideally we would like to:
    - import data in server.js
    - pass data from server.js to app.js file 
    - again pass data from app.js to routes module

- New server.js code : 
    - Import data in server.js and pass it to app.js like below:
        
        var http = require('http'),
            flights = require('./data'), //import data here
            app = require('./app')(flights); //pass data to app module

        http.createServer(app).listen(app.get('port'), function(){
          console.log('Express server listening on port ' + app.get('port'));
        });

- New app.js code:
    - import flights-data from server and pass it on to routes module

        module.exports = function (flightsData){
        
            var express = require('express');
            var routes = require('./routes')(flightsData);

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

            return app;

        }

- New routes/index.js code:
    - this module takes flightsData as input and return the route methods.
    - note the way we are returning all the methods by attaching them to an empty **functions** object.

        module.exports = function(flightsData){

            //this module returns flight object for given flight data
            var flight = require('../flight2');


            var flights = {}; //define empty flights object
            var functions = {}; //for returning methods

            for(var number in flightsData){
                console.log ('loading flight data for - ' + number)
                flights[number] = flight(flightsData[number]);
            }

            functions.flight = function(req, res){
                    var number = req.param('number');

                    if (typeof flights[number] === 'undefined'){
                            res.status(404).json({status: 'error'});
                    } else {
                            res.json(flights[number].getInformation());
                    }

            };

            functions.arrived = function(req, res){
                    var number = req.param('number');

                    if (typeof flights[number] === 'undefined'){
                            res.status(404).json({status: 'error'});
                    } else {
                            flights[number].triggerArrive();
                            res.json({status: 'done'});
                    }

            };

            functions.list = function(req, res){
                    res.render('list' , {
                        title:"All Flights",
                        flights: flights});
            };

            functions.listjson = function(req, res){
                var flightJsonData = [];
                for (var number in flights){
                    flightJsonData.push(flights[number].getInformation())
                }

                res.json(flightJsonData);
            };

            //This is incorrect way of sending json data. 
            //This will contains property name as Numeric values
            functions.listIncorrectJson = function(req, res){
                var flightJsonData2  = require('../data');
                res.json(flightJsonData2);
            };

            return functions;
        };

- Finally start the server and make sure all the services (routes) are working fine
    - <http://localhost:3000/flight/13>
    - <http://localhost:3000/list/json>
    - <http://localhost:3000/flight/13/arrived>
    - <http://localhost:3000/flight/incorrectjson>