//this module takes flighsData as input and app as output
module.exports = function (flightsData, db){
    
    var express = require('express');
    var MongoStore = require('connect-mongo')(express);
    var passport = require('./auth');
    var routes = require('./routes')(flightsData);

    var path = require('path');

    var app = express();

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'keyboard cat',
        store: new MongoStore({
            mongooseConnection: db
        })
    }));
    app.use(passport.initialize());//this starts passport
    app.use(passport.session());//store sessions in passport
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
    app.get('/arrivals',routes.arrivals);

    app.get('/login',routes.login);
    app.post('/login',passport.authenticate('local',{
        failureRedirect: '/login',
        successRedirect: '/user'
    }));

    app.get('/user',routes.user);
    return app;

}



