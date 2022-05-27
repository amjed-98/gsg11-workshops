const cors = require('cors');
require('env2')('.env');
const express = require('express');
const path = require('path');
const compression = require('compression');

const routes = require('./routes');

const app = express();

// fix cors error
app.use(cors());

app.use(compression());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use(express.json());

app.use(routes);

module.exports = app;
