const mysql = require("mysql");
const env = require("dotenv"); 

env.config();

const database = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

database.connect((err) => {
  if (err) {
    console.log("database connections failed");
  } else {
    console.log("database succesfully connected");
  }
});

module.exports = database;
