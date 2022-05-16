import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
const root = createRoot(document.getElementById('root'));

let user = prompt("what is your username?");

axios.get(`/balance/${user}`)
  .then((res) => {
    console.log(res)
    root.render(<App myUser={user} myBalance={res.data.balance} />);
  })