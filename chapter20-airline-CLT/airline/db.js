var mongoose = require('mongoose'); //import installed module

mongoose.connect('mongodb://mongodbadmin:secret1084@ds053774.mongolab.com:53774/nodejs-flights');

module.exports = mongoose.connection;