//This code is taken from app2.js file
var flight = require ('./flight5')

//create 1st object with flight info
var pdxlax = {
    number: 847,
    origin: 'PDX',
    destination: 'LAX'
};

var pl = flight.create(pdxlax);
pl.triggerDepart(); 
console.log('First Flight Information: ')
console.log(pl.getInformation()); 


//create 2nd object with flight info
var ausdca = {
    number: 382,
    origin: 'AUS',
    destination: 'DCA'
};

var ad = flight.create(ausdca); //send flight info to flight2 module
console.log('Second Flight Information: ');
console.log(ad.getInformation()); //print 2nd flight information

console.log(flight.getCount());
console.log(flight.getDestinations());