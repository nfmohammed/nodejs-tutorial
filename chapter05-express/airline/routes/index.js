
//two dots - because flight2 is in parent direcoty
var flight = require('../flight2')

var flightA = flight({
    number: 1,
    origin: 'LAX',
    destination:'DCA',
    departs: '9AM',
    arrives: '4PM'
});

var flightB = flight({
    number: 2,
    origin: 'LAX',
    destination:'PDX',
    departs: '10AM',
    arrives: '12PM'
});

//send json response
exports.flightA = function(req, res){
  res.json(flightA.getInformation());
};

//send json response
exports.flightB = function(req, res){
  res.json(flightB.getInformation());
};