const express = require('express');
const users = require('./static');

const router = express.Router();

const getUser = require('../database/queries/getData');
const createUser = require('../database/queries/postData');

router.get('/users', (req, res) => {
  getUser()
    .then((userData) => res.json(userData.rows))
    .catch((err) => res.json(err));
});

router.post('/create-user', (req, res) => {
  const { name, location } = req.body;

  createUser({ name, location })
    .then((data) => res.json(data.rows))
    .catch((err) => res.json(err));
});

module.exports = router;
