const sqlite3 = require('sqlite3')
const Promise = require('bluebird')

const db = new sqlite3.Database('./server/db/db.db');

const findBalance = (username) => {
  return new Promise ((res, rej) => {
    db.all(`SELECT balance from users WHERE username = ?`, [username], (err, row) => {
      if (err) {
        rej(err, 'no err')
      } else {
        res(row[0].balance);
      }
    })
  })
}

const adjustBalance = (username, adjustment) => {
  return findBalance(username)
    .then((balance) => {
      let newBalance = balance + adjustment;
      return new Promise ((res, rej) => {
        db.all(`UPDATE users SET balance = ? WHERE username = ?`, [newBalance, username], (err, row) => {
          if (err) {
            rej(err, 'no err')
          } else {
            res('updated!');
          }
        })
      })
    })
    .then(() => {
      return findBalance(username);
    })
}

// db.all(`UPDATE users SET balance = 1241231 WHERE username = ?`, ['Nathaniel'], (err, row) => {
//   if (err) {
//     console.log(err, 'no err')
//   } else {
//     console.log(row, 'row bb')
//   }
// })

// adjustBalance('Nathaniel', 200)
//   .then((result) => {
//     console.log(result)
//   })

module.exports = { findBalance, adjustBalance }