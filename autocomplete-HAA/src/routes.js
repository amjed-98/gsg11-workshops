const homeHandler = require('./handlers/homeHandler');
const handleApiRequest = require('./handlers/apiHandler');
const handleError = require('./handlers/errorHandler');

const router = (req, res) => {
  const { url } = req;

  if (url === '/') return homeHandler(res, '../public/index.html', 'text/html');

  if (url === '/style.css') return homeHandler(res, '../public/style.css', 'text/css');

  // this handles all js files
  if (url.includes('.js')) return homeHandler(res, `../public/${url}`, 'text/javascript');

  if (url.includes('.png')) return homeHandler(res, `../${url}`, 'image/png');

  if (url === '/cars') return homeHandler(res, 'car_brands.json', 'application/json');

  if (url === '/cars/images') return handleApiRequest(res);

  return handleError(res);
};

module.exports = router;
