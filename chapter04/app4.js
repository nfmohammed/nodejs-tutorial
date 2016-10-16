//This code is taken from app2.js file
var Flight = require ('./flight4')

//create 1st object with flight info
var pdxlax = {
    number: 847,
    origin: 'PDX',
    destination: 'LAX'
};

var pl = new Flight();
pl.fill(pdxlax); 
pl.triggerDepart(); 
pl.triggerArrive(); 
console.log('First Flight Information: ')
console.log(pl.getInformation()); 


//create 2nd object with flight info
var ausdca = {
    number: 382,
    origin: 'AUS',
    destination: 'DCA'
};

var ad = new Flight(); //send flight info to flight2 module
ad.fill(ausdca);
console.log('Second Flight Information: ');
console.log(ad.getInformation()); //print 2nd flight information

console.log('First Flight Information: ');
console.log(pl.getInformation()); //print 1st flight information. 

//output:
//Both flight instances should be separate