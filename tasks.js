require("dotenv").config();
const mysql = require("mysql");

//connect to db with .env credentials
const db = mysql.createConnection({
  user: process.env.DB_MYSQL_USER,
  password: process.env.DB_MYSQL_PASSWORD,
});

//ignore duplicate db and table creation errors
const ignore = new Set([
  "ER_DB_CREATE_EXISTS", "ER_TABLE_EXISTS_ERROR"
]);

db.on("error", (err) => {
  if (ignore.has(err.code)) return;
  throw err;
})

//create database
db.query("CREATE DATABASE tasks;");
db.query("USE tasks");

//create table
db.query(`
CREATE TABLE tasks.tasks (
id INT NOT NULL AUTO_INCREMENT,
task TEXT NOT NULL, PRIMARY KEY ( id ));
`);

//insert data into table
db.query(`
INSERT INTO tasks.tasks (task)
VALUES  ("Walk the dog.");
`)

//obtain contents of table with callback function
db.query(`
SELECT * FROM tasks.tasks;
`, (err, results, fields) => {
    console.log(results);
    db.end();
});