# About #
This is an assignment application written in React. Online version of this application is available here: 
https://dm-trafficmeister.herokuapp.com/
It is hosted on Heroku platform and there is a delay of booting an application (<20s) due to limitations of free acouunt.

## Instalation ##

Install [nodejs](https://nodejs.org/es/) if necessary and execute following command:

`$ npm install`

I use `eslint`, `mocha` and `babel-node` to execute some scripts defined in `package.json`. If there is some problem with some of them, I recommend install it globally.

## Commands ##
`$ npm run start -s` To start a development server at http://localhost:8080 

`$ npm run build` To make a build in /build folder. 

`$ npm run test` To process tests via `mocha`. 

`$ npm run deploy` There is some auto-deploy to `master` of my GitHub repository of this project. There is also a hook on GitHub that notifies Heroku platform after every `git push`, to make a new build. 
