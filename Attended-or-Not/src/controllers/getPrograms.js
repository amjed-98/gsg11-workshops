const {getData} = require('../database/queries/getData');
const getPrograms = (req, res) => getData().then((data) => res.send(data.rows));

module.exports = getPrograms;
