var http = require('http'),
    flightsData = require('./data'), //import data here
    db = require('./db'),
    repl = require('repl'), 
    app = require('./app')(flightsData,db); //pass data to app module

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var prompt = repl.start({prompt: 'flights> '});
prompt.context.data = flightsData; //flight-data will be available as global property in this repl context