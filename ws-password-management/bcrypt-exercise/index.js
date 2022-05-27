'use strict';

const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  // use bcrypt to hash the password and return it asynchronously

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return callback(new Error('TODO'));
    bcrypt.hash(password, salt, callback);
  });

  // return bcrypt.hash(password, 10, callback);
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
  // use bcrypt to compare the passwords and return a boolean asynchronously
};

module.exports = {
  comparePasswords,
  hashPassword,
};

const hashPassword = (password) => {
  bcryptjs
    .hash(password, 10)
    .then((hashPassword) =>
      checkUser(email).then((data) => handleCheckUser(hashPassword, res, data)),
    );
};
hashPassword('passaword');
