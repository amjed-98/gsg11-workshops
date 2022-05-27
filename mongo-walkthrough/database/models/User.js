const { Schema, model } = require('mongoose');

// Schema determines how the model looks like
const userSchema = new Schema({
  firstName: { type: 'string', required: true, unique: true },
  lastName: 'string',
  age: 'number',
  city: 'string',
});

// creating a model so we can query it.
const User = model('User', userSchema);

module.exports = User;
