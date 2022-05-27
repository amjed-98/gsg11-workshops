const { postData, postDataToMembers } = require('../database/queries/postData');
const { getData, getMember } = require('../database/queries/getData');

const getDataFromProgram = (req, res) => {
  postData(req.body);

  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch(console.log);
};

const getDataFromUser = (req, res) => {
  postDataToMembers(req.body)
    .then(() => getMember())
    .then((data) => res.json(data.rows))
    .catch(console.log);
};

module.exports = { getDataFromProgram, getDataFromUser };
