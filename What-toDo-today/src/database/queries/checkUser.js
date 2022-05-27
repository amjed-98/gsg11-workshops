const connection = require('../config/connection');

const checkUser = (email) => connection.query({
  text: 'SELECT email, password, id FROM users WHERE email = $1',
  values: [email],
});

module.exports = checkUser;
