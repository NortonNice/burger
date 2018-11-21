var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function(err, res) {
    if (err) throw err; 
    console.log('Connected!')
});

module.exports = connection;
        