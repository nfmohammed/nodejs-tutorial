## Event Listener

- The starting code has been taken from chapter19

- In this lession we will learn how to create event and listen for them

- In our example, we will emit an event after `triggerArrive()` method is invoked. Then we will create two listeners, one will insert data in database  
and other will output log to console

#### code 

- To use events, we will `require('events')` module which comes with node framework, we do not need to install it separately

- The `routes/index.js` file is modified as below:

    
    var Emitter = require('events').EventEmitter;
    var flightEmitter = new Emitter();
    ...more code....

    functions.arrived = function(req, res){
            var number = req.param('number');

            if (typeof flights[number] === 'undefined'){
                    res.status(404).json({status: 'error'});
            } else {
                    flights[number].triggerArrive();
                    
                    flightEmitter.emit('arrival',flights[number]); //trigger flight arrival event

                    res.json({status: 'success'});
                    
            }
    };

- Create two listeners as below:

    flightEmitter.on('arrival',function(flight){
        var record = new FlightSchema(flight.getInformation());
        record.save(function(err){
            if(err){ //log error from database
                console.log(err);
                res.status(500).json({status: 'failure'});
            }
        });
    });

    flightEmitter.on('arrival',function(flight){
        //console.log(flight.data.number);
        console.log('Flight arrived: ' + flight.getInformation().number);
    });

    module.exports = function(flightsData){

        ...more code ....
    }

#### test

- using postman, get request <http://localhost:3000/flight/13>

- using postman, put request <http://localhost:3000/flight/13/arrived>

- verify that the data has been inserted in mongodb and console output show flight arrived info

- since nodejs is non-blocking, we can just emit information and continue main execution. The listeners will perform their tasks independently


