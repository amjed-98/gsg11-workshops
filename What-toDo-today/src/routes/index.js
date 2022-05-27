const router = require('express').Router();
const auth = require('../middleware/auth');
const {
  signUp,
  getSignUp,
  postLogin,
  getLogin,
  deleteToDo,
  addNote,
  todo,
  editTodo,
  clientError,
  serverError,
  getAllTodo,
  displayUserName,
} = require('../controllers');

router.route('/signUp').post(signUp).get(getSignUp);

router.route('/login').get(auth, getLogin).post(postLogin);

router.route('/allTodo').get(auth, getAllTodo);

router.route('/todo').post(auth, addNote).get(auth, todo);

router.route('/todo/:id').patch(auth, editTodo).delete(auth, deleteToDo);

router.get('/displayUserName', auth, displayUserName);

router.use(clientError);
router.use(serverError);

module.exports = router;
