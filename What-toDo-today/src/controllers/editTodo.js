const { editTodoQuery } = require('../database/queries');

const editTodo = ({ id: ID, params, body }, res) => {
  if (!ID) return res.status(401).json({ err: 'unauthorized' });

  const { id } = params;
  return editTodoQuery(id, body.note)
    .then(({ rows }) => {
      const editedNote = rows[0];

      res.status(202).json(editedNote);
    })
    .catch(() => res.status(401).send({ msg: 'Authorization Required' }));
};

module.exports = editTodo;
