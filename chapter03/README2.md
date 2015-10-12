## Node Tutorial - part 2

- Read previous documentation in [README.md](README.md)

- Reference [Youtube Video 38:00 minutes](https://www.youtube.com/watch?v=YozRK2kv4r0)

### More NPM Commands

- Previously, we have seen **npm** as package manager but  **npm** is capable of installing, starting and maintaining node projects. 

- let's start with installing *express* globally using npm command.

		Nmohammed in ~/mac-workspace/nodejs-tutorial (master●)
		$ sudo npm install -g express-generator
        express@4.13.3 /usr/local/lib/node_modules/express
        ├── escape-html@1.0.2
        ├── merge-descriptors@1.0.0
        ├── array-flatten@1.1.1
        ├── cookie@0.1.3
        ├── utils-merge@1.0.0
        ├── cookie-signature@1.0.6
        ├── methods@1.1.1
        ├── fresh@0.3.0
        ├── range-parser@1.0.2
        ├── vary@1.0.1
        ├── path-to-regexp@0.1.7
        ├── etag@1.7.0
        ├── content-type@1.0.1
        ├── parseurl@1.3.0
        ├── content-disposition@0.5.0
        ├── serve-static@1.10.0
        ├── depd@1.0.1
        ├── qs@4.0.0
        ├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
        ├── on-finished@2.3.0 (ee-first@1.1.1)
        ├── finalhandler@0.4.0 (unpipe@1.0.0)
        ├── debug@2.2.0 (ms@0.7.1)
        ├── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.7)
        ├── type-is@1.6.9 (media-typer@0.3.0, mime-types@2.1.7)
        └── send@0.13.0 (destroy@1.0.3, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)


- **Note: When a module is installed globally in Node, it install the command line tool**

- So, we can now use **express** command line tool. Let's use express to create out application **airline2**

      $ express airline2

      create : airline2
      create : airline2/package.json
      create : airline2/app.js
      create : airline2/public
      create : airline2/public/images
      create : airline2/public/stylesheets
      create : airline2/public/stylesheets/style.css
      create : airline2/routes
      create : airline2/routes/index.js
      create : airline2/routes/users.js
      create : airline2/public/javascripts
      create : airline2/views
      create : airline2/views/index.jade
      create : airline2/views/layout.jade
      create : airline2/views/error.jade
      create : airline2/bin
      create : airline2/bin/www

      install dependencies:
      $ cd airline2 && npm install

      run the app:
      $ DEBUG=airline2:* npm start

- Note that *express* has created **package.json** for us. Remember, earlier we used *npm init* to create package.json

- Let's go ahead and take a look at this file:

		$ cat package.json
        {
          "name": "airline2",
          "version": "0.0.0",
          "private": true,
          "scripts": {
            "start": "node ./bin/www"
          },
          "dependencies": {
            "body-parser": "~1.13.2",
            "cookie-parser": "~1.3.5",
            "debug": "~2.2.0",
            "express": "~4.13.1",
            "jade": "~1.11.0",
            "morgan": "~1.6.1",
            "serve-favicon": "~2.3.0"
          }

- So, our application is dependent on above modules, let's go ahead and download them with following command:

		$ npm install

- Above command has downloaded all the modules inside **node_modules** folder

- To start the app, use the command `npm start`, the application will be running at `http://localhost:3000`

- To remove a module, delete its entry from **package.json** file and run command `npm prune`

### Continue

- read [README3.md](README3.md) to learn how to build our own module



