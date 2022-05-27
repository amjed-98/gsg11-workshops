const { checkUser } = require('../database/queries');
const { loginSchema } = require('../validation');
const handleCheckUser = require('./handleCheckUser');

const postLogin = (req, res) => {
  const { email, password } = req.body;

  loginSchema.validateAsync(req.body).then(() => checkUser(email)
    .then((data) => handleCheckUser(password, res, data)))
    .catch((err) => {
      if (err) { res.status(401).json({ msg: 'Bad request' }); }
    });
};

module.exports = postLogin;
