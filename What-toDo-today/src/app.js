const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routes');

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 5000);

app.use(router);
module.exports = app;
