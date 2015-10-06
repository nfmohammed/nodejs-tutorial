## Chapter03 

#### Installing Module using npm

- In this chapter, we will see
	- how to create a new project using npm
	- how to install a module using npm

- To create a project in node, we need `package.json` file. We can use NPM to generate this file. 

- NPM helps in module installation and other things. Let assume that our project name is `airline`. Use `npm init` and it will help to create the package file


		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03/airline (master)
        $ npm init
        This utility will walk you through creating a package.json file.
        It only covers the most common items, and tries to guess sane defaults.

        See `npm help json` for definitive documentation on these fields
        and exactly what they do.

        Use `npm install <pkg> --save` afterwards to install a package and
        save it as a dependency in the package.json file.

        Press ^C at any time to quit.
        name: (airline)
        version: (1.0.0)
        description: Keeps track of an airline's flights
        entry point: (index.js)
        test command:
        git repository:
        keywords:
        author: Naseer Mohammed
        license: (ISC)
        About to write to /Users/Nmohammed/mac-workspace/nodejs-tutorial/chapter03/airline/package.json:

        {
          "name": "airline",
          "version": "1.0.0",
          "description": "Keeps track of an airline's flights",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Naseer Mohammed",
          "license": "ISC"
        }
 
- This package.json file will contain information about all the dependent module. 

- Let's install ***express*** module. This module helps us to create a quick web app

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03/airline (master●)
		$ npm install --save express 

		Nmohammed in ~/mac-workspace/nodejs-tutorial/chapter03/airline (master●●)
        $ cat package.json
        {
          "name": "airline",
          "version": "1.0.0",
          "description": "Keeps track of an airline's flights",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Naseer Mohammed",
          "license": "ISC",
          "dependencies": {
            "express": "^4.13.3"
          }
        }
 - Above command will create **node_modules** folder and also create `dependencies` object in `package.json` file
 
 - Next, create index.js file which will use express to create an app.
 
 - Run `node index.js` and verify that the app is working <http://localhost:3000/>
 
#### Continue

- See more module commands in [README2.md](README2.md) 

#### References

- <https://www.npmjs.com/>

- <https://www.npmjs.com/package/express>