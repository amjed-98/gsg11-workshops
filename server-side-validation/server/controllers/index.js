'use strict';

const router = require('express').Router();
const Joi = require('joi');

const error = require('./error');

router.post('/signup', (req, res) => {
  // Write your code here
});

router.post('/login', (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const result = schema.validate({
    email: req.body.email,
    password: req.body.password,
  });

  if (result.error) {
    res.send(result.error);
  }
});
router.use(error.client);
router.use(error.server);

module.exports = router;
