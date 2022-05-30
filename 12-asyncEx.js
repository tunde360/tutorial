const { readFile } = require ('fs');

console.log('firstTask');
readFile('./content/firstTest.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
} console.log(result);
console.log('secondTask');
})
console.log('thirdTask');

// as you know, Javascript is single threaded so it reads one line at a time
// a typical Javascript program would wait for the "readFile" operation to be completed before-
// -proceeding to "console.log('thirdTask')"
// this makes the appliation slow
// but with an asynchronous method, the app is ran and then the "readFile" operation-
// -which takes time, is called after the task "console.log('thirdTask')" is completed