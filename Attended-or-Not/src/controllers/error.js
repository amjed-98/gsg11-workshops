const { join } = require('path');

const notFoundError = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};

module.exports = { notFoundError, serverError };
