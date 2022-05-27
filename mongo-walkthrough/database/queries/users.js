const User = require('../models/User');

const createUser = ({ firstName, lastName, age, city }) => {
  return User.create({ firstName, lastName, age, city });
};

const findAll = () => User.find();

const findOne = (name) => User.findOne({ name });

const deleteAll = () => User.deleteMany({});

module.exports = {
  createUser,
  findAll,
  findOne,
  deleteAll,
};
