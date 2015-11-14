var http = require('http'),
    flightsData = require('./data'), //import data here
    app = require('./app')(flightsData); //pass data to app module

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});