const request = require('request');

const clientId = process.env.CLIENT_ID;
const handleApiReq = (res) => {
  const url = `https://api.unsplash.com/search/photos?query=car&client_id=${clientId}`;
  request(url, { json: true }, (err, response, body) => {
    if (err) {
      res.writeHead(500);
      return res.end('server error');
    }

    const cars = JSON.stringify(body);
    // fix cors issue
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(cars);
  });
};

module.exports = handleApiReq;
