const connection = require('../config/connection');

const displayUserNameQuery = (id) => connection.query('SELECT name FROM users WHERE id = $1', [id]);

module.exports = displayUserNameQuery;
