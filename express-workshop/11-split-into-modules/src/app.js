const express = require('express');
const router = express.Router();

const compression = require('compression');

const indexRoute = require('./controllers/index');
const errorRouter = require('./controllers/error');
const fruitRoute = require('./controllers/fruit.js');
const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(compression());

app.use(router);

router.use(indexRoute, fruitRoute, errorRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
