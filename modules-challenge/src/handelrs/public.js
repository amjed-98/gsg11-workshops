const fs = require('fs');

const extensions = {
  html: 'text/html',
  text: 'text/plain',
};

const handlePublic = (res, url) => {
  const extension = url.split('.')[1];
  console.log(url);
  fs.readFile(path.join(__dirname, '..', '..', 'public', url), 'utf8', (err, file) => {
    /* istanbul ignore if */
    if (err) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');
    } else {
      res.writeHead(200, { 'content-type': extensions[extension] });
      res.end(file);
    }
  });
};

module.exports = handlePublic;
