require('env2')('.env');
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('database connected successfully'))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
