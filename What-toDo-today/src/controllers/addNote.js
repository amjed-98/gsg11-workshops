const { postNote } = require('../database/queries');

const addNote = (req, res) => {
  const { note, date } = req.body;
  const userId = req.id;
  postNote(note, userId, date).then((data) => res.json(data.rows));
};

module.exports = addNote;
