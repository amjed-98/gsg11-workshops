const { Pool } = require('pg');
require('env2')('.env');

let dbURL = '';

if (process.env.NODE_ENV === 'test') dbURL = process.env.DB_URL_TEST;
if (process.env.NODE_ENV === 'dev') dbURL = process.env.DB_URL;
if (process.env.NODE_ENV === 'production') dbURL = process.env.DATABASE_URL;

if (!dbURL) throw new Error('no db url');

const option = {
  connectionString: dbURL,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(option);
