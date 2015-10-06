//Node tried to find relay.js file (or) relay folder with index.js file
var relay = require('./relay');

//if 'prefix' is defined as global variable inside relay/index.js then 'prefix' will be overwritten here
prefix = "Attention: "; 

relay('Ticket counter closes at 10PM');
