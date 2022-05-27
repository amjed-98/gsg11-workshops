const http = require('http');
const handler = require('./routes');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(handler);

server.listen(port);

console.log('server running on: http://' + host + ':' + port);

module.exports = {
  server,
};
