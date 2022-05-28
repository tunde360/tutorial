const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        // console.log(err);
        return;
    }
    const first = result;

readFile('./content/second.txt','utf8', (err, result) => {
    if (err) {
        return;
    } 
    const second = result;

writeFile('./content/result-asnyc.txt', `${first} & ${second}`, (err, result) => {
    if (err) {
        return;
    } console.log('starting task');
})
})
})

console.log('done with task');