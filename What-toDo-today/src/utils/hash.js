const bcrypt = require('bcryptjs');

const hash = (password) => bcrypt.hash(password, 10);

module.exports = hash;
