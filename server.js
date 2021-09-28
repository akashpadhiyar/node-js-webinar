var http = require("http");
var a = 10;
var b = 20;
var c = a + b;
var mymsg = "A value is " + a + "B Value is " + b + "Sum is " + c ;
http.createServer(function(req,res){
    res.end("<h1>Welcome to node js </h1>" + mymsg);
}).listen(3000);
console.log("Server is Started at http://127.0.0.1:3000");