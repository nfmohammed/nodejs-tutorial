var FlightSchema = require('../schemas/flight');

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

            req.session.lastName = number;//storing number in session

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
                    
                    //saving flight information to database
                    var record = new FlightSchema(
                        flights[number].getInformation()
                        );
                    record.save(function(err){
                        if(err){
                            console.log(err);
                            res.status(500).json({status: 'failure'});
                        }else{
                            res.json({status: 'success'});
                        }
                    });
                    
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

    //reading from database
    functions.arrivals = function(req, res){
        //FlightSchema.find(); //this will pull all database records in random order
        FlightSchema.find()
        .setOptions({sort:'actualArrive'}) //sorting data by arrivalTime
        .exec(function(err, dbFlights){ //exec function upon response from DB
            if(err){
                console.log(err);
                res.status(500).json({status:'failure'});
            }else{ //if response is success
                res.render('arrivals',{ //display new view: arrivals
                    title: 'Arrivals', //pass argument: title
                    arrivals: dbFlights, //pass argument: DB-Flight-Object
                    lastNumber: req.session.lastNumber //pass argument: number stored in session
                });
            }
        });

    };

    return functions;
};

