'use strict';

const jwt = require('jsonwebtoken');

const router = require('express').Router();

const error = require('./error');

// Write your code here

router.post('/login', (req, res) => {
  const payload = {
    id: 5,
    username: 'amjad',
  };

  jwt.sign(payload, 'private', (err, token) => {
    if (err) throw new Error(err);

    res.cookie('token', token).redirect('/');
  });
  // res.cookie('token', token).redirect('/');
});

router.post('/logout', (req, res) => {
  res.clearCookie('token').redirect('/');
});

router.get('/auth_check', (req, res) => {});
router.use(error.client);
router.use(error.server);

module.exports = router;
