const connection = require('../config/connection');

const getTodo = (id) => connection.query('SELECT * FROM todo WHERE user_id = $1', [id]);

module.exports = getTodo;
