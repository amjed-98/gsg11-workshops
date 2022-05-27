const bcrypt = require('bcryptjs');

const compare = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

module.exports = compare;
