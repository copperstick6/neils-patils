//Initializing my databases
'use strict';
var mysql = require('mysql');
require('dotenv').load();

var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  port     : process.env.PORT,
  database : process.env.DATABASE,
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
	connection.end()
    return;
  }

  console.log('Connected to database.');
  connection.query("CREATE TABLE memes (Description varchar(4000), Name varchar(255))");
  connection.end()
});
