var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_cake_shop'
});

connection.connect(function(err){
    if (err) 
    console.log("Ket noi CSDL khong thanh cong!");
});

module.exports = connection;