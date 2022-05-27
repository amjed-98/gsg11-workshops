const { deleteToDoQuery } = require('../database/queries');

const deleteToDo = (req, res) => {
  if (!req.id) return res.status(401).json({ err: 'unauthorized' });

  const { id } = req.params;
  return deleteToDoQuery(id).then(() => res.status(202).send({ msg: 'todo Deleted Successfully' }));
};
module.exports = deleteToDo;
