const fs = require('fs');
const path = require('path');

const handleHomeRoute = (res) => {
  const htmlPath = path.join(__dirname, '..', '..', 'public', 'index.html');

  fs.readFile(htmlPath, (error, file) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('<h1>system error</h1>');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(file);
  });
};

module.exports = handleHomeRoute;
