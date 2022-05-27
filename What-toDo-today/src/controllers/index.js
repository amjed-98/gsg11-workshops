const signUp = require('./signUp');
const getSignUp = require('./getSignUp');
const postLogin = require('./postLogin');
const getLogin = require('./getLogin');
const addNote = require('./addNote');
const getAllTodo = require('./getAllTodo');
const editTodo = require('./editTodo');
const deleteToDo = require('./deleteToDo');
const todo = require('./todo');
const { clientError, serverError } = require('./errors');
const displayUserName = require('./displayUserName');

module.exports = {
  signUp,
  getSignUp,
  postLogin,
  getLogin,
  deleteToDo,
  clientError,
  serverError,
  editTodo,
  getAllTodo,
  addNote,
  todo,
  displayUserName,
};
