var whisper = function (message){
	console.log('proclaiming: ' + message);
}

exports.softly = whisper;//return softly method, which call function (shown above)

//return loudly method, which call below function
exports.loudly = function (message){
	console.log('PROCLAIMING: '+message);
}