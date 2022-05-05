const sqlite3 = require('sqlite3')
const Promise = require('bluebird')

const db = new sqlite3.Database('./db.db');
// CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT NOT NULL, balance INTEGER NOT NULL)
// db.all(`INSERT INTO users VALUES (1, 'Julie', 10000);`, (something) => { console.log(something) })
const queryDbPromise = new Promise ((resolve, reject) => {
  db.all(`SELECT * FROM users;`, (err, row) => {
    if (err) {
      reject(err);
    } else {
      resolve(row);
    }
  })
})

queryDbPromise
  .then((row) => {
    console.log(row)
  });

module.exports = db