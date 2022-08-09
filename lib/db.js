var mysql = require('mysql');

var db =  connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'th0523',
    database : 'opentutorials'
});
db.connect();

module.exports = db;