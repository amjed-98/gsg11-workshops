const { join } = require('path');

const getSignUp = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'signup.html'));
};

module.exports = getSignUp;
