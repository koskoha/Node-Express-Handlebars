var connection = require('./connection.js');

module.exports = {
    selectAll: function(callback) {
        connection.query('SELECT * FROM burger', (err, data) => {
            if (err) {
                console.log('Can\'t get any data from the db.');
                throw err;
            }
            callback(data);
        });
    },
    insertOne: function(newBurger, callback) {
        connection.query('INSERT INTO burger(burger_name, devoured) VALUES (?,"0")', [newBurger.name], (err, result) => {
            if (err) {
                console.log('Can\'t insert data into the table.');
                throw err;
            }
            callback();
        });
    },
    updateOne: function(burgerId, callback) {
        connection.query('UPDATE burger SET devoured = true WHERE id = ?', [burgerId], (err, result) => {
            if (err) {
                console.log('Can\'t update data in the table');
                throw err;
            }
            callback(result);
        });
    }
};