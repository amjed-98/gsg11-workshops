const connection = require('../config/connection');

const getMembers = () =>
  connection.query(
    'SELECT members.id, members.name, members.phone, members.date, program.name_program,program.num_session, program.time from members join program on (members.program_id = program.id);',
  );

module.exports = getMembers;
