const fs = require('fs');
const path = require('path');

const extensions = {
  js: 'text/javascript',
  css: 'text/css',
  jpg: 'image/img.jpg',
  png: 'image/img.png',
};

const publicRoute = (res, url) => {
  const extension = url.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', 'public', url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500);
      return res.end('server error');
    }
    res.writeHead(200, { 'Content-Type': extensions[extension] });
    return res.end(file);
  });
};

module.exports = publicRoute;
