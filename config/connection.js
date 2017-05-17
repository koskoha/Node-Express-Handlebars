var mysql = require('mysql');

// MySql connection config
module.exports = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: "burgers_db"
});