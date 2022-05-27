const { join } = require('path');

const express = require('express');
const compression = require('compression');
require('env2')('.env');

const router = require('./routes');

const app = express();

app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(express.static(join(__dirname, '..', 'public')));
app.set('port', process.env.PORT || 3000);
module.exports = app;
