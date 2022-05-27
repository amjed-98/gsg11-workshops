const { getTodo } = require('../database/queries');

const getAllTodo = (request, response) => {
  if (!request.id) return response.status(401).json({ err: 'unauthorized' });

  const userId = request.id;
  getTodo(userId).then((data) => response.json(data.rows));
};

module.exports = getAllTodo;
