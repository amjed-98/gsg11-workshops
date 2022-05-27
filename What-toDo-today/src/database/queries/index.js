const addUser = require('./addUser');
const checkEmail = require('./checkEmail');
const checkUser = require('./checkUser');
const postNote = require('./postNote');
const getTodo = require('./getTodo');
const editTodoQuery = require('./editTodoQuery');
const deleteToDoQuery = require('./deleteTodoQuery');
const displayUserNameQuery = require('./displayUserNameQuery');

module.exports = {
  addUser,
  checkEmail,
  checkUser,
  editTodoQuery,
  deleteToDoQuery,
  getTodo,
  postNote,
  displayUserNameQuery,
};
