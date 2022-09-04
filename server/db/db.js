const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'sudoku',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback), 
};
