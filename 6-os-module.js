const os = require('os'); // 'os' is a built in node.js module 

// info about user
const user = os.userInfo();
console.log(user);
//  this method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem: os.totalmem(),
}
console.log(currentOS);