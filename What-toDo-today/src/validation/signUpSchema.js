const Joi = require('joi');

const signUpSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().regex(/[A-z0-9]{6,}/),
  confirmsPassword: Joi.ref('password'),
});

module.exports = signUpSchema;
