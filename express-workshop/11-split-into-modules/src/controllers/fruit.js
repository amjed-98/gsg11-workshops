// handle '/fruit' get and post requests
const express = require('express');
const fruit = new express.Router();

const path = require('path');

fruit
  .route('/fruit')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'fruit.html'));
  })

  .post((req, res) => {
    console.log(req.body.name, req.body.image_url);
    res.redirect('/fruit');
  });

module.exports = fruit;
