let row1 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
let row2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
let row3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
// let column1 = >= 1 && <= 12
// let column2 = >= 13 && <= 27
// let column3 = >= 28 && <= 36
let red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 25, 27, 28, 30, 32, 34, 36];
let black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 29, 31, 33, 35];

// roulette data structure
const roulette = Array.from(Array(37).keys());
roulette.unshift(-1);

let resultObj = {};

for (let i = 0; i < roulette.length; i++) {
  let num = roulette[i];
  // check row
  let characteristics = {};
  let foundRow = false;
  let foundColor = false;

  characteristics.number = num.toString();

  for (let j = 0; j < row1.length; j++) {
    if (num === row1[j]) {
      characteristics.row = 1;
      foundRow = true;
      break;
    }
  }
  if (!foundRow) {
    for (let j = 0; j < row2.length; j++) {
      if (num === row2[j]) {
        characteristics.row = 2;
        foundRow = true;
        break;
      }
    }
  }
  if (!foundRow) {
    characteristics.row = 3;
    foundRow = true;
  }

  // check column
  // let column1 = >= 1 && <= 12
  // let column2 = >= 13 && <= 27
  // let column3 = >= 28 && <= 36
  if (num >= 1 && num <= 12) {
    characteristics.column = 1;
  } else if (num >= 13 && num <= 27) {
    characteristics.column = 2;
  } else if (num >= 28 && num <= 36) {
    characteristics.column = 3;
  }

  // check zone
  // let low = >= 1 && <= 18
  // let high = >= 19 && <= 36
  if (num >= 1 && num <= 18) {
    characteristics.zone = 'low';
  } else {
    characteristics.zone = 'high';
  }

  // check parity
  if (num % 2 === 0) {
    characteristics.parity = 'even';
  } else {
    characteristics.parity = 'odd';
  }

  // check color
  if (num === 0 || num === -1) {
    characteristics.color === 'green';
    foundColor = true;
  }
  if (!foundColor) {
    for (let j = 0; j < red.length; j++) {
      if (num === red[j]) {
        characteristics.color = 'red';
        foundColor = true;
        break;
      }
    }
  }
  if (!foundColor) {
    characteristics.color = 'black';
    foundColor = true;
  }
  resultObj[num] = characteristics;
}

let empty = {};
empty.row = 0;
empty.column = 0;
empty.zone = 'none';
empty.parity = 'none';
empty.color = 'green';
resultObj['-1'] = empty;
resultObj['0'] = empty;

console.log(resultObj);

let roulette1 = Array.from(Array(37).keys());
roulette1.unshift(-1);
roulette1 = roulette1.map((num) => {
  return num.toString();
})
console.log(roulette1)