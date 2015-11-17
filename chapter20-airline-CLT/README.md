## Installing custom module as command line tool

- In one of the previous tutorial we have seen how to install `express` module as command line tool using the command `npm install -g express`

- Now, if we want to install our custom project `airline` as command line then following changes need to be made:
    - in package.json, change name to `airline` and include bin to server.js i.e. when `airline` command is executed, it inturns execute server.js file

        {
          "name": "airline",
          "version": "0.0.1",
          "private": true,
          "scripts": {
            "start": "node app.js"
          },
          "bin":"./server.js",
          "dependencies": {
            "connect-mongo": "^0.8.2",
            "express": "3.4.8",
            "jade": "*",
            "mongoose": "^4.2.5",
            "passport": "^0.3.2",
            "passport-local": "^1.0.0"
          },
          "devDependencies": {
            "mocha": "^2.3.3",
            "should": "^7.1.1",
            "supertest": "^1.1.0"
          }
        }

- Next, include the following in server.js
        
        #!/usr/bin/env node

- Since we have project locally we cannot use `-g` command but instead we need to use `npm link` command

        Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter20-airline-CLT/airline (master●)
        $ npm link
        /usr/local/bin/airline -> /usr/local/lib/node_modules/airline/server.js
        /usr/local/lib/node_modules/airline -> /Users/Nmohammed/mac-workspace/nodejs-tutorial/chapter20-airline-CLT/airline

- To start the application, just give `airline` command from anywhere in your computer

        Nmohammed in ~ (master●●)
        $ airline
        loading flight data for - 13
        loading flight data for - 16
        loading flight data for - 18
        loading flight data for - 33
        flights> Express server listening on port 3000

- If you move the airline project to some other path, then just re-issue `npm link` from the new location.

