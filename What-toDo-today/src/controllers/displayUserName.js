const { displayUserNameQuery } = require('../database/queries');

const displayUserName = (req, res) => {
  if (!req.id) return res.status(401).json({ err: 'unauthorized' });

  const userId = req.id;
  return displayUserNameQuery(userId).then((data) => res.json(data.rows));
};

module.exports = displayUserName;
