const http = require('http');

require('env2')('.env');

const routes = require('./routes');

const server = http.createServer(routes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is Running http://localhost:${port}`);
});
