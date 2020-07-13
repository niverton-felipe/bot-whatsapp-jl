const Pool = require('pg').Pool
const db = new Pool({
  user: 'postgres',
  password: 'niv049437*',
  host: 'localhost',
  port: 5432,
  database: 'Jesus_Libertador'
})


module.exports = db