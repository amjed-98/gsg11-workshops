const connection = require('../config/connection');

const editTodo = (id, note) => connection.query('update todo set note = $1 where id = $2 RETURNING note', [note, id]);

module.exports = editTodo;
