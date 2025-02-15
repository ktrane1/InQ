const { Pool } = require('pg');

const { PG_URI } = process.env;

const pool = new Pool({
  connectionString: PG_URI,
  max: 1,
  min: 0,
  idle: 10000,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
