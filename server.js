//bring in libraries
var express = require('express');
var app = express();

//declare port
var port = process.env.PORT || 8080;

//morgan
var morgan = require('morgan');

//middleware - being executed on every transaction between client and server
app.use(morgan('dev')); //any request to server will go through / use morgan first and log to console 'dev'

app.use('/', function(req, res){
  res.send('Our First Express Program!');
});

app.listen(port);
console.log('Server running on port: ' + port);
