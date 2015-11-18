var fs = require('fs'); //this is core module

var stream = fs.createReadStream('data.json');

var counter = 0; //keep track of how many chunk of data is read
stream.on('data',function(chunk){
    console.log('------------ begin chunk -----------');
    //console.log(chunk.toString()); //uncomment to see whats been read
    counter = counter + 1; 
    console.log('chunk counter = ' + counter );
    console.log('------------ end of chunk ----------');

}); 

stream.on('data', function(chunk){
    console.log('CHUNK LENGTH WAS: ' + chunk.length);
});

stream.on('end',function(){
    console.log('------------ reached file end ----------');
});