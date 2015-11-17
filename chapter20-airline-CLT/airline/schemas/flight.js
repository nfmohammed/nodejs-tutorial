var mongoose = require('mongoose');

//mongoose.model('Table Name', Object);
module.exports = mongoose.model('Flight',{
    number: Number,
    origin: String,
    destination: String,
    departs: String,
    arrives: String,
    actualDepart: Number,
    actualArrive: Number
});