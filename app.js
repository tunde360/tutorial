// npm init -y      to install node package manager
// package, dependency & module all mean the same 

const _ = require('lodash');

const items = [1, [2,[3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
