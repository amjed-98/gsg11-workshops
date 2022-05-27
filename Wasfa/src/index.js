const app = require('./app');
const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log('server is running on http://localhost:3000'));
