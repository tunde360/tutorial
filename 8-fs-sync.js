const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync('./content/first.txt','utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');

console.log(firstFile, secondFile);

console.log('start');
writeFileSync(
'./content/result-sync.txt', 
`this is the result: ${firstFile}, ${secondFile}`,
{ flag: 'a' }
);
console.log('starting task');
console.log('done with task');