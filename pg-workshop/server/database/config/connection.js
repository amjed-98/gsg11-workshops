// Add code below to connect to your database

const { Pool } = require('pg');
require('env2')('config.env');
let dbURL = '';

if (process.env.NODE_ENV === 'test') dbURL = process.env.TEST_DB_URL;
else dbURL = process.env.DB_UR;

if (!process.env.DB_URL) throw new Error('no db url');

const options = {
  connectionString: process.env.DB_URL,
  ssl: false,
};
module.exports = new Pool(options);
