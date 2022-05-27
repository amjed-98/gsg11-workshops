const path = require('path');
const handle404 = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'pages', '404.html'));
};
module.exports = handle404;
