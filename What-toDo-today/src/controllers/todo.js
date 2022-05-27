const { join } = require('path');

const todo = (req, res) => {
  if (!req.id) return res.json({ msg: 'unauthorized' });
  return res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'todo.html'));
};

module.exports = todo;
