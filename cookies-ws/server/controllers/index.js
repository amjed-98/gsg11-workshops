const cookieParser = require('cookie-parser');
const express = require('express');

const error = require('./error');
const ensureAuth = require('./middlewares/ensureAuth');

const router = express.Router();

router.use(cookieParser());

// write your code
router.use(cookieParser());

router.post('/login', (req, res) => res.cookie('loggedIn', 'true').redirect('/'));

router.post('/logout', ensureAuth, (req, res) =>
  res.clearCookie('loggedIn').redirect('/'),
);

router.get('/auth-check', ensureAuth, (req, res) => {
  res.send('welcome admin');
});

router.use(error.client);

module.exports = router;
