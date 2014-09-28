var express = require('express');
var fs = require('fs');

var text = fs.readFileSync("/home/ubuntu/bitstarter/index.html");
var buffer = new Buffer(text, "utf-8");

var app = express.createServer(express.logger());
app.get('/', function(request, response){
   response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);

});

