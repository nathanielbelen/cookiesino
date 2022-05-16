const express = require('express');
const path = require('path');
const { findBalance, adjustBalance } = require('./db/db.js');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
// not secure at all - fix with auth

app.get('/balance/:user', (req, res) => {
  let { user } = req.params;
  findBalance(user)
    .then((balance) => {
      res.send({ balance: balance });
    })
})

app.post('/balance/:user', (req, res) => {
  let { user } = req.params;
  console.log(user, req.body)
  // findBalance(user)
  //   .then((balance) => {
  //     res.send({ balance: balance });
  //   })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
