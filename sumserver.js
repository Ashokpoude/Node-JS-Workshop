var http = require('http');

var a=10;
var b=20;
var c=a+b;
console.log(`value of a is ${a} and b is ${b}
sum is ${c}`);

var msg = "value of c is: "+c;
if (c==30){
   msg += "<br/> Sum is 30"
}else{
    msg += "<br/> sum is not 30";
}

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end(msg);
}).listen(3000);

console.log("server is listening in localhost:3000");