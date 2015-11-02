//import flight module
var flight = require ('./flight2')

//create 1st object with flight info
var pdxlax = {
    number: 847,
    origin: 'PDX',
    destination: 'LAX'
};

var pl = flight(pdxlax) //send flight info to flight2 module
pl.triggerDepart(); //invoke method from flight2 module
pl.triggerArrive(); // invoke method from flight2 module
console.log('First Flight Information: ')
console.log(pl.getInformation()); //invoke method from flight2 module


//create 2nd object with flight info
var ausdca = {
    number: 382,
    origin: 'AUS',
    destination: 'DCA'
};

var ad = flight (ausdca) //send flight info to flight2 module
console.log('Second Flight Information: ')
console.log(ad.getInformation()); //print 2nd flight information

console.log('First Flight Information: ')
console.log(pl.getInformation()); //print 1st flight information. 

//output:
//Both flight instances should be separate