## Login Feature

- the starting code has been taken from previous chapter

- in this chapter we will see login feature and use session to keep user logged in


#### passport module

- passport is a module that access middleware for express and it handle logins

- to use this module: `npm install --save passport`

- we will also use: `npm install --save passport-local`. This contains the basic login strategy of entering username and password. There can be other strategies like validate using facebook or gmail account, etc..

#### code

- let's create authentication file `auth.js` with code as below:
    
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

        passport.serializerUser(function(user,done){
        done(null,user.username);
        });

        passport.deserializerUser(function(username, done){
        done(null, {username: username});
        });

        module.exports = passport;

- note that the only valid credentials for login are **username:admin and password:lynda**

- the serialize and deserialize code need to be present here. not sure whats it does!

- In app.js file, we will require `auth.js` and append following lines of code:
        
        var passport = require('./auth');
        ...more code here... 
        
        app.use(passport.initialize());//this starts passport
        app.use(passport.session());//store sessions in passport

        ...more code here...

- Include routing logic in app.js:

        app.get('/login',routes.login);
        app.post('/login',passport.authenticate('local',{
            failureRedirect: '/login',
            successRedirect: '/user'
        }));

        app.get('/user',routes.user);

- Define routes logic inside `routes/index.js` as follows:

       functions.login = function(req,res){
            res.render('login',{title:'Log In'})
        }

        functions.user = function(req,res){
            if(req.session.passport.user === undefined){
                res.render('/login');
            }else{
                res.render('user',{titile:'Welcome!', user: req.user});
            }
        }
- Finally, define `login view` and `user view`

#### test
 
- start the app and go to <http://localhost:3000/login>

- enter username: admin and password: lynda.  
    user should be redirected to user page with welcome message

- if invalid username/password is entered then user should be again on login page