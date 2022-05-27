const handleHomeRoute = require('./routes/HomeRoute');
const publicRoute = require('./routes/publicRoute');
const handlePostRoute = require('./routes/postRoute');
const handlePost = require('./routes/post');

const router = (req, res) => {
  const { url } = req;
  if (url === '/') {
    handleHomeRoute(res);
  } else if (url === '/script.js') {
    publicRoute(res, url);
  } else if (url === '/main.css') {
    publicRoute(res, url);
  } else if (url.includes('/img/')) {
    publicRoute(res, url);
  } else if (url === '/node') {
    res.end('node');
  } else if (url === '/girls') {
    res.end('girls');
  } else if (url === '/create-post') {
    handlePostRoute(req, res);
  } else if (url === '/posts') {
    handlePost(req, res);
  }
};

module.exports = router;
