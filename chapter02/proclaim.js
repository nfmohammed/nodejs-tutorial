var whisper = function (message){
	console.log('proclaiming: ' + message);
}

exports.softly = whisper;//return whisper function here

//return different function here
exports.loudly = function (message){
	console.log('PROCLAIMING: '+message);
}