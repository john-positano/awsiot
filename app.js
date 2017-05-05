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

app.use('/', main);
app.use('/dsn', dsn);

module.exports = app;