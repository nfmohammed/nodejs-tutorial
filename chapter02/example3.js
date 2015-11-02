
//Object 'say' has two methods and each is calling different function inside 'proclaim.js'
var say = require('./proclaim');

say.softly('we have extra seats available');

say.loudly('ALL FLIGHTS CANCELLED.');