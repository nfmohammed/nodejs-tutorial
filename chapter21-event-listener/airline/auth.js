var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy; //Strategy is a property in local module

passport.use(new LocalStrategy(
    function(username, password, done){
        
        //usually these credentials are checked agains database
        if(username === 'admin' && password === 'lynda'){
            return done(null, {username: 'admin'});
        }
        return done(null, false);
    }));

passport.serializeUser(function(user,done){
    done(null,user.username);
});

passport.deserializeUser(function(username, done){
    done(null, {username: username});
});

module.exports = passport;