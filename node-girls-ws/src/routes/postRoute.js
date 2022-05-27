const path = require('path');
const { writeFile, readFile } = require('fs');

const handlePostRoute = (req, res) => {
  if (req.method === 'POST') {
    let allData = '';
    req.on('data', (chunkOfData) => {
      allData += chunkOfData;
    });

    return req.on('end', () => {
      const json = path.join(__dirname, '..', 'posts.json');
      const postData = new URLSearchParams(allData).get('post');

      readFile(json, (err, file) => {
        const parsedFile = JSON.parse(file);
        parsedFile[Date.now()] = postData;

        if (err) return res.writeHead(500);

        writeFile(json, JSON.stringify(parsedFile), (err) => {
          if (err) {
            res.writeHead(500);
            res.end('server error');
          }
        });
      });

      res.writeHead(301, { Location: '/' });
      res.end();
    });
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  return res.end('<h1>Page Not Found!</h1>');
};

module.exports = handlePostRoute;
