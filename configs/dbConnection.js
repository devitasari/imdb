const mysql = require('mysql');

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : process.env.DB_USER || 'root',
  password        : process.env.DB_PASSWORD || 'password',
  database        : process.env.DB_NAME || 'mysql'
});
 
module.exports = pool

