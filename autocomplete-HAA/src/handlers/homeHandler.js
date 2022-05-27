const fs = require('fs');
const path = require('path');

const homeHandler = (res, endPoint, extension) => {
  const filePath = path.join(__dirname, '..', endPoint);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('server is down');
    }

    // fix cors issue
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.writeHead(200, { 'Content-Type': extension });
    return res.end(data);
  });
};

module.exports = homeHandler;
