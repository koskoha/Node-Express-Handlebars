var orm = require('./../config/orm.js');

module.exports = {
    createBurger: (newBurger, callback) => {
        orm.insertOne(newBurger, () => {
            callback();
        });
    },
    all: (callback) => {
        orm.selectAll(res => {
            callback(res);
        });
    },
    updateBurger: (burger, callback) => {
        orm.updateOne(burger, res => {
            callback(res);
        });
    }
};