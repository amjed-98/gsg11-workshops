const { join } = require('path');

const getLogin = (req, res) => {
  if (req.id) return res.redirect('/todo');

  return res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'login.html'));
};

module.exports = getLogin;
