//this module returns flight object
module.exports = function(info) {
	
	//define a object called 'values'
	var values = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};
	
	//setting the values from the input object 'info'
	for(var prop in values){
		if(values[prop] !== 'undefined'){
			values[prop] = info[prop];
		}
	}
	
	//we want to return the 3 functions defined here
	var functions = {
		triggerDepart: function(){
			values.actualDepart = Date.now();
		},
		triggerArrive: function(){
			values.actualArrive = Date.now();
		},
		getInformation: function(){
			return values;
		}
	};
	return functions; //returning above 3 functions	
}