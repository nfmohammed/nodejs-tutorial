## Sessions

#### introduction

- Sessions allow user to login first time and not have to enter credentials on every page.

- In NodeJS, we have to manage sessions whereas in other languages, it is taken care for you.

![01](images/01.png)

![02](images/02.png)

- We will use `mongodb` to store our sessions.

#### connect-mongo

- the module `connect-mongo` helps connect `express` application to `mongodb`

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter16-session/airline (master●)
        $ npm install --save connect-mongo
        //if there are errors, ignore them

#### code changes

- the starting code has been taken from previous chapter

- the following code in `app.js` enables session management. To store session id in mongodb, we need to pass database instance here.

        app.use(express.cookieParser());
            app.use(express.session({
                secret: 'keyboard cat',
                store: new MongoStore({
                    mongoose_connection: db
                })
            }));

- since we need database instance in above code, we need database instance to be passed into `app.js`

        module.exports = function (flightsData, db){
        ......
        .....
        }

- in `server.js`, pass database instance when requiring `app` module

        app = require('./app')(flightsData,db); 

- now, when user sends `get` request for flight service, following `routes/index.js` code will store flight number in session

         functions.flight = function(req, res){
                    var number = req.param('number');

                    **req.session.lastName = number;**

                    if (typeof flights[number] === 'undefined'){
                            res.status(404).json({status: 'error'});
                    } else {
                            res.json(flights[number].getInformation());
                    }

            };

- modify `arrivals` service such that we are passing last viewed flight along with the flights from mongodb

        functions.arrivals = function(req, res){
                FlightSchema.find()
                .setOptions({sort:'actualArrive'}) 
                .exec(function(err, dbFlights){ 
                    if(err){
                        console.log(err);
                        res.status(500).json({status:'failure'});
                    }else{ //if response is success
                        res.render('arrivals',{ 
                            title: 'Arrivals', 
                            arrivals: dbFlights, 
                            **lastNumber: req.session.lastNumber**
                        });
                    }
                });

            };

- finally, in the `arrivals.jade` view, insert a paragraph to show last viewed flight:

        extends layout

        block content
                h1= title
                **p= 'Last Flight viewed: ' + lastNumber**
                ul
                    each flight, index in arrivals
                        - landed = new Date(flight.actualArrive)
                        li= flight.number +  ':' + flight.origin + '-' + landed

#### test

- On browser, send get request for any valid flight <http://localhost:3000/flight/13>

- In a new tab, send get request for arrivals <http://localhost:3000/arrivals> and this should display previous flight number

- switch to previous tab, send another get request <http://localhost:3000/flight/18>

- refresh arrivals tab and see that the last viewed value has been changed from 13 to 18 

#### references
- <https://github.com/kcbanner/connect-mongo>
