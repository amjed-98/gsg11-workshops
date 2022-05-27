const removeMemberFromDb = require('../database/queries/removeMember');

const removeMember = (req, res) => removeMemberFromDb(req.body.id);

module.exports = { removeMember };
