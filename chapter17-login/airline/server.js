var http = require('http'),
    flightsData = require('./data'), //import data here
    db = require('./db'), 
    app = require('./app')(flightsData,db); //pass data to app module

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});