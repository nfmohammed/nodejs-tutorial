## Building Website with NodeJS and ExpressJS

- To install Node, we will use ***NVM*** . The installation instructions are [here](https://github.com/creationix/nvm)

- [Video guide for installation](https://www.youtube.com/watch?v=YozRK2kv4r0)

- Installation output:


		Nmohammed in ~ (master●●)
        $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.28.0/install.sh | bash
          % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                         Dload  Upload   Total   Spent    Left  Speed
        100  7731  100  7731    0     0  11377      0 --:--:-- --:--:-- --:--:-- 11385
        => Downloading nvm from git to '/Users/Nmohammed/.nvm'
        => Cloning into '/Users/Nmohammed/.nvm'...
        remote: Counting objects: 4012, done.
        remote: Compressing objects: 100% (34/34), done.
        remote: Total 4012 (delta 12), reused 0 (delta 0), pack-reused 3978
        Receiving objects: 100% (4012/4012), 995.26 KiB | 0 bytes/s, done.
        Resolving deltas: 100% (2323/2323), done.
        Checking connectivity... done.
        * (detached from v0.28.0)
          master

        => Appending source string to /Users/Nmohammed/.zshrc
        env: node: No such file or directory
        => Close and reopen your terminal to start using nvm

        Nmohammed in ~ (master●●)
        $ nvm --version
        0.28.0

        Nmohammed in ~ (master●●)
        $ nvm install 0.10

        Nmohammed in ~ (master●●)
        $ node --version
        v0.10.40

- Switching between Nodes:

		Nmohammed in ~ (master●●)
		$ nvm use 0.10
		Now using node v0.10.40 (npm v1.4.28)
		nvm is not compatible with the npm config "prefix" option: currently set to "/Users/		nmohammed/.nvm/v0.10.40"
		Run `npm config delete prefix` or `nvm use --delete-prefix v0.10.40` to unset it.


		Nmohammed in ~ (master●●)
		$ nvm use --delete-prefix v0.10.40
		Now using node v0.10.40 (npm v1.4.28)

- Setting Default Node Version:

		Nmohammed in ~ (master●●)
		$ nvm alias default 0.10
		default -> 0.10 (-> v0.10.40)
		
- Note that command line tool ***npm*** is also installed with **node**

		Nmohammed in ~/mac-workspace/nodejs-tutorial (master)
		$ npm --version
		2.14.2