const { sign } = require('jsonwebtoken');
const { compare } = require('../utils');

const handleCheckUser = (password, res, data) => {
  const userIsFound = data.rows.length;

  if (!userIsFound) {
    return res.status(404).send({
      msg: 'The email you entered isn’t connected to an account. please Create an account',
    });
  }

  const { password: passwordFromDb, id } = data.rows[0];

  return compare(password, passwordFromDb)
    .then((isMatch) => {
      if (isMatch) {
        return sign({ id }, process.env.SECRET_KEY, (errorId, token) => {
          if (errorId) return res.send(errorId);
          return res.status(302).cookie('token', token).json({ msg: 'success' });
        });
      }
      return res.status(401).send({ msg: 'The password you’ve entered is incorrect' });
    })
    .catch(() => res.send('something went wrong'));
};

module.exports = handleCheckUser;
