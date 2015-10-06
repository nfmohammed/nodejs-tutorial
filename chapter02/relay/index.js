//without 'var' this becomes global variable
//prefix = 'Relaying: '; 

var prefix = 'Relaying: ';
module.exports = function(message){
	console.log(prefix + message);
};