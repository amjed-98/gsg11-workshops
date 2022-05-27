const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //

app.post('/fruit', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.get('/fruit', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
});
app.listen(4000, () => {
  console.log('App running on port 3000');
});
