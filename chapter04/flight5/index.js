//define local variables to this module
var count = 0,
	destinations = []

//This code will act as base for new object
var Flight = function(){
	
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function(info){
		//setting the values from the input object 'info'
		for(var prop in this.data){
			if(this.data[prop] !== 'undefined'){
				this.data[prop] = info[prop];
			}
		}
	};

	this.triggerDepart= function(){
		this.data.actualDepart = Date.now();
	};

	this.triggerArrive= function(){
		this.data.actualArrive = Date.now();
	};
	
	this.getInformation= function(){
		return this.data;
	};

};

exports.create = function(info){
	var instance = new Flight();

	instance.fill(info);

	count++;
	if(destinations.indexOf(info['destination']) < 0){
		destinations.push(info['destination']);
	}
	return instance;
}

exports.getCount = function(){
	return count;
}

exports.getDestinations = function(){
	return destinations;
}