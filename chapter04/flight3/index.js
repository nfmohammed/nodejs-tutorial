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


module.exports = function(info) {
	
	var instance = new Flight();

	instance.fill(info);

	return instance;	
}