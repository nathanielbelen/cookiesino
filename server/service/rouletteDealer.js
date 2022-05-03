// const number = require('./numbers.js');
// const numbers = Object.keys(characteristics);

import characteristics from './characteristics.js';
const numbers = Object.keys(characteristics);
const multiplier = {
  inside: 36,
  row: 3,
  column: 3,
  zone: 2,
  parity: 2,
  color: 2,
}

let bets = {
  nathaniel: {
    inside: {
      '36': 3000,
      '00': 200,
    },
    outside: {
      color: {
        'red': 391
      }
    }
  }
};

let payouts = {};

let currentRoll = {};

// roll func to determine winner
let roll = () => {
  let ran = Math.floor(Math.random() * 37.99999999999999); // lol
  currentRoll = characteristics[numbers[ran]];
  console.log(numbers[ran], currentRoll);
};

let totalWinnings = (player) => {
  let total = 0

  // inside bets
  // if player's inside bet exists
  if (player.inside[currentRoll.number]) {
    // add the bet amount * 36 to the total
    total += player.inside[currentRoll.number] * multiplier.inside;
  }

  // outside bets
  if (player.outside) {
    let bets = Object.keys(player.outside);
    for (let i = 0; i < bets.length; i++) {
      let value = currentRoll[bets[i]]
      if (player.outside[bets[i]][value]) {
        total += player.outside[bets[i]][value] * multiplier[bets[i]]
      }
    }
  }

  console.log(`${total} winnings!`)
  return total;
}

roll();
totalWinnings(bets.nathaniel);

let winners = () => {
}

console.log(numbers)