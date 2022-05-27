const path = require('path');
const { readFile } = require('fs');

const handlePost = (req, res) => {
  const json = path.join(__dirname, '..', 'posts.json');

  readFile(json, (err, file) => {
    if (err) res.writeHead(500);
    else res.end(file);
  });
};

module.exports = handlePost;
