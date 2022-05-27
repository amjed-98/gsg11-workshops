const connection = require('../config/connection');

const getData = () => connection.query('SELECT * FROM program;');
const getMember = () =>
  connection.query(
    'SELECT members.id, members.name, members.phone, members.date, program.name_program,program.num_session, program.time from members join program on (members.program_id = program.id);',
  );

module.exports = { getData, getMember };
