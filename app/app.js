var express = require('express');
var app = express();
var mysql = require('mysql');
var dotenv = require('dotenv').config();

Ω = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	multipleStatements: true
});

var dsn = require('./routes/dsn');
var main = require('./routes/main');

app.use(function(req, res, next) {
	res.redirect('https://' + req.headers.host + req.url)
});

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));

app.use('/', main);
app.use('/dsn', dsn);

module.exports = app;