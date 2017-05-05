var express = require('express');
var app = express();
var mysql = require('mysql');
var dotenv = require('dotenv').config();

var Ω = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	multipleStatements: true
});

app.post('/', function(req, res, next) {
	Ω.query('SELECT 1', [], function(err, results) {
		if (err) {
			console.log(err);
		}
		console.log(results);
		res.send(results);
		Ω.release();
		return;
	});
});

app.listen(3000);