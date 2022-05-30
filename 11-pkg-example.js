// npm init -y      to install node package manager
// package, dependency & module all mean the same 
// npm i devmon -D    to install devmon devDependency 
// npm i nodemon     to install nodemon dependency
// npm run dev      to run the devDependecy nodemon
// "scripts": {
    // "start": "node app.js",
    // "dev": "nodemon app.js"
//   }    "start" and "dev" were customly made in the package.json file
// the whole purpose of nodemon is to enable me to stop having to write node app.js or whatever all the time ;)
// npm install -g nodemon   run this in gitbash to install globally

const _ = require('lodash');

const items = [1, [2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
console.log('hello world');
