const connection = require('../config/connection');

const removeMemberFromDb = (id) => connection.query(`delete from members where id = ${id}`);

module.exports = removeMemberFromDb;
