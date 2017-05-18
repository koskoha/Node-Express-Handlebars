var mysql = require('mysql');
var connection;
// MySql connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: '',
        database: "burgers_db"
    });
}

connection.connect();
module.exports = connection;