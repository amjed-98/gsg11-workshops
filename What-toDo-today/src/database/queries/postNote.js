const connection = require('../config/connection');

const postNote = (note, id, date) => connection.query('INSERT INTO todo (note, user_id,date) VALUES ($1, $2, $3) RETURNING *', [note, id, date]);

module.exports = postNote;
