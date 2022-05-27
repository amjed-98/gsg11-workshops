const connection = require('../config/connection');

const deleteToDoQuery = (id) => connection.query('DELETE FROM todo WHERE id = $1', [id]);

module.exports = deleteToDoQuery;
