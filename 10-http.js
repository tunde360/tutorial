const http = require ('http');
// const port = 5000;

http.createServer ((req,res) => {
    res.write('hello world');
    res.end();
}).listen(5000);
// server.listen(port, function (error){
//     if(error){
//         console.log('experiencing issues');
//     } else {
//         console.log('up and running');
//     }
// });
