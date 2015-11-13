
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

