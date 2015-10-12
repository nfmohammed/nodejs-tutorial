var number, origin, destination;

//funtion that allows to set flight number
exports.setNumber = function(num){
    number = num
}

//function that allows to set origin 
exports.setOrigin = function(o){
    origin = o
}

//function that allows to set destination
exports.setDestination = function(d){
    destination = d
}

exports.getInfo = function(){
    return {
        number : number,
        origin: origin,
        destination : destination
    };
}
