// import { WebSocketServer } from 'ws';
// import data from './data.js';

// why did I loop through objects like that lol refactor to use for-in loop

const WebSocketServer = require('ws').WebSocketServer;
const WebSocket = require('ws')
const data = require('./data.js');
const { multipliers, numbers, characteristics } = data;

const wss = new WebSocketServer({ port: 8080 });

let bets = {};
let payouts = {};
let currentRoll = {};

// roll func to determine winner
let roll = () => {
  let ran = Math.floor(Math.random() * 37.99999999999999); // lol
  currentRoll = characteristics[numbers[ran]];
  console.log(numbers[ran], currentRoll);
};

let gatherWinnings = (player) => {
  let total = 0

  // inside bets
  // if player's inside bet exists
  if (player.inside[currentRoll.number]) {
    // add the bet amount * 36 to the total
    total += player.inside[currentRoll.number] * multipliers.inside;
  }

  // outside bets
  // if outside bet exists
  if (player.outside) {
    let bets = Object.keys(player.outside);
    // loop through bets
    for (let i = 0; i < bets.length; i++) {
      let value = currentRoll[bets[i]]
      if (player.outside[bets[i]][value]) {
        total += player.outside[bets[i]][value] * multipliers[bets[i]]
      }
    }
  }

  console.log(`${total} winnings!`)
  return total;
}

const processWinners = () => {
  let bettors = Object.keys(bets);
  for (let i = 0; i < bettors.length; i++) {
    let bettor = bettors[i];
    //process every bettor
    let winnings = gatherWinnings(bets[bettor]);
    if (winnings) {
      payouts[bettor] = winnings;
    }
  }
}

const payWinner = (winner) => {
  let amount = payouts[winner] || 0;
  console.log(`this will query db to add ${amount} to ${winner}'s account`)
  return amount;
}

const finalizeWinnings = () => {
  let winners = Object.keys(payouts);
  if (winners.length === 0) {
    console.log('no winners sorry!')
  } else {
    for (let i = 0; i < winners.length; i++) {
      let winner = winners[i];
      payWinner(winner)
    }
  }
  bets = {};
  payouts = {};
  currentRoll = {};
}

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    let messageObj = JSON.parse(data);
    console.log(messageObj);
    if (messageObj.type === 'bet') {
      bets[messageObj.user] = messageObj.message
      console.log(bets);
    }
    if (messageObj.type === 'roll') {
      roll();
      processWinners();
      console.log(payouts)
      // finalizeWinnings();
      // temporary for MVP below
      // ws.send((JSON.stringify({winnings: payWinner(messageObj.from), roll: currentRoll.index})));
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({winnings: payouts, roll: currentRoll.index}));
          if (payouts[messageObj.user]) {
            client.send(JSON.stringify({ type: 'winner', text: `just won ${payouts[messageObj.user]}!`, user: messageObj.user }
            ));
          }
        }
      });
      bets = {};
      payouts = {};
      currentRoll = {};
    }
    if (messageObj.type === 'message') {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(messageObj.message);
        }
      });
    }
  });

  ws.send(JSON.stringify({type: 'message', user:'system', text: 'welcome to ouronlygameisroulette.com'}));
});

wss.broadcast = function(data) {
  wss.clients.forEach(client => client.send(data));
};

// roll();
// processWinners();
// finalizeWinnings();