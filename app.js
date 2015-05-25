var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(favicon(__dirname + '/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile( __dirname + '/index.html');
});


app.listen(process.env.PORT || 8888, function(){
  console.log('Yeplive web landing now running');
});