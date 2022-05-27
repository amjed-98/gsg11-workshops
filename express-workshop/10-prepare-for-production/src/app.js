const express = require('express');
const path = require('path');

// import compression module
const compression = require('compression'); //compress response size

const app = express();

// disable powered by express header
app.disable('x-powered-by');

// set port number
app.set('port', 4000);

// use compression middleware
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set cache age (maxAge) to 30 days
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.get('/fruit', (req, res) => {
  console.log(app.get('port'));
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});

app.post('/fruit', (req, res) => {
  console.log(req.body.name, req.body.image_url);
  res.redirect('/fruit');
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
});

// listen on dynamic port number
app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
