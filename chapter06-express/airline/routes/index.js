//this module returns flight object for given flight data
var flight = require('../flight2')

var flightsData = require('../data'); //this object contains flight data

var flights = {}; //define empty flights object

for(var number in flightsData){
    console.log ('loading flight data for - ' + number)
    flights[number] = flight(flightsData[number]);
}

exports.flight = function(req, res){
        var number = req.param('number');

        if (typeof flights[number] === 'undefined'){
                res.status(404).json({status: 'error'});
        } else {
                res.json(flights[number].getInformation());
        }

}