const path = require('path');

console.log(path);

const pathJoin = path.join('/content', 'subfolder', 'text.txt');

console.log(pathJoin);

const base = path.basename('text.txt');
console.log(base);

const absolutePath = path.resolve(__dirname,'/content', 'subfolder', 'test.txt');
console.log(absolutePath);