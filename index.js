var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger());
var path = require('path');
var fs = require('fs');

var text = fs.readFileSync(path.join(process.cwd(), '/index.html'));
var buffer = new Buffer(text);

app.get('/', function(request, response){
   response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
   console.log("Listening on " + port);

});
