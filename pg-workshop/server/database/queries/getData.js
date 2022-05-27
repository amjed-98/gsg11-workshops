// Add code below to get users info from your database

const connection = require('../config/connection');

const getUser = () => connection.query('SELECT * FROM users');

module.exports = getUser;
