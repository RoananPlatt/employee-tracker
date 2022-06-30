const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Dc2guc2kg!',
  database: 'db_employee_tracker'
  },
  console.log(`Connected to the inventory_db database.`)
  );


module.exports = db;
