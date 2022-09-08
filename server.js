var http = require('http');


http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end("Welcome to <br/> Node Js");
}).listen(3000);

console.log("server is listening in localhost:3000");