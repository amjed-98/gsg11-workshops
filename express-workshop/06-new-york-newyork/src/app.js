const express = require('express');
const path = require('path');

const app = express();

// serve Hello New York on the /new-york, /newyork paths

// app.get('/:city', (req, res) => {
//   res.status(200).send(req.params.city);
// });
app.use((req, res, next) => {
  res.send('04040');
});

app.get('/new-?york', (req, res) => {
  res.status(200).send('hello new you');
});

app.listen(4000, () => {
  console.log('App running on port 3000');
});
