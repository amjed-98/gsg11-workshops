const express = require('express');

const app = express();

// create 1 handler for 3 paths

app.get('/:city', (req, res) => {
  console.log(req.query.name);
  res.send(`hello ${req.params.city} ${req.query.name}`);
});
app.listen(5000, () => {
  console.log('App running on port 3000');
});
