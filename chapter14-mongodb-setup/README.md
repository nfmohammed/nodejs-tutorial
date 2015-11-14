## Mongo DB

- MongoDB is document oriented database with javascript as its query language

- MongoDB can be installed locally on your computer or you can use their online service **[mongo labs](https://mongolab.com)**

#### Mongo Lab Database Setup

- Select `create new` database
- Select any cloud provider, default is amazon web services
- Select `single node` for development purposes
- Provide database name = **nodejs-flights**
- Database will be created: For us, the name is ***ds053774/nodejs-flights***
- Click on the database name to provide database credentials:
    - credentials: **mongodbadmin/secret1\*\*4 [see keeper]**

```        
To connect using the mongo shell:  
mongo ds053774.mongolab.com:53774/nodejs-flights -u <dbuser> -p <dbpassword>
        
To connect using a driver via the standard MongoDB URI:  
mongodb://<dbuser>:<dbpassword>@ds053774.mongolab.com:53774/nodejs-flights
```

#### nodejs module - mongoose

- In our application, we will use **mongoose** to connect to mongodb.

- use the command to install mongoose in our application: `npm install --save mongoose`
    
        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter14-mongodb/airline (master●)
        $ npm install --save mongoose

- create `db.js` file to connect to above mongodb server

- Import db.js file in server.js and try to start up the server, if it does, that means we are able to connect successfully

- starting up the app:

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter14-mongodb/airline (master●)
        $ node server.js
        Express server listening on port 3000