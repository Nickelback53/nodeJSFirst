 const res = require('express/lib/response');
var mysql = require('mysql');
 var connection = mysql.createConnection({
     host : 'localhost',
     user : 'root',
     password : 'th0523',
     database : 'opentutorials'
 });

 connection.connect();

 connection.query('select * from topic', function(error , results, fileds){
    if(error){
        console.log(error);
    }
    console.log(results);

 });

 connection.end();