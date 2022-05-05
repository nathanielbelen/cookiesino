const data = {
  multipliers: {
    inside: 36,
    row: 3,
    column: 3,
    zone: 2,
    parity: 2,
    color: 2,
  },
  characteristics: {
    '00': {
      index: 0,
      number: '00',
      row: 0,
      column: 0,
      zone: 'none',
      parity: 'none',
      color: 'green'
    },
    '0': {
      index: 1,
      number: '0',
      row: 0,
      column: 0,
      zone: 'none',
      parity: 'none',
      color: 'green'
    },
    '1': {
      index: 2,
      number: '1',
      row: 1,
      column: 1,
      zone: 'low',
      parity: 'odd',
      color: 'red'
    },
    '2': {
      index: 3,
      number: '2',
      row: 2,
      column: 1,
      zone: 'low',
      parity: 'even',
      color: 'black'
    },
    '3': {
      index: 4,
      number: '3',
      row: 3,
      column: 1,
      zone: 'low',
      parity: 'odd',
      color: 'red'
    },
    '4': {
      index: 5,
      number: '4',
      row: 1,
      column: 1,
      zone: 'low',
      parity: 'even',
      color: 'black'
    },
    '5': {
      index: 6,
      number: '5',
      row: 2,
      column: 1,
      zone: 'low',
      parity: 'odd',
      color: 'red'
    },
    '6': {
      index: 7,
      number: '6',
      row: 3,
      column: 1,
      zone: 'low',
      parity: 'even',
      color: 'black'
    },
    '7': {
      index: 8,
      number: '7',
      row: 1,
      column: 1,
      zone: 'low',
      parity: 'odd',
      color: 'red'
    },
    '8': {
      index: 9,
      number: '8',
      row: 2,
      column: 1,
      zone: 'low',
      parity: 'even',
      color: 'black'
    },
    '9': {
      index: 10,
      number: '9',
      row: 3,
      column: 1,
      zone: 'low',
      parity: 'odd',
      color: 'red'
    },
    '10': {
      index: 11,
      number: '10',
      row: 1,
      column: 1,
      zone: 'low',
      parity: 'even',
      color: 'black'
    },
    '11': {
      index: 12,
      number: '11',
      row: 2,
      column: 1,
      zone: 'low',
      parity: 'odd',
      color: 'black'
    },
    '12': {
      index: 13,
      number: '12',
      row: 3,
      column: 1,
      zone: 'low',
      parity: 'even',
      color: 'red'
    },
    '13': {
      index: 14,
      number: '13',
      row: 1,
      column: 2,
      zone: 'low',
      parity: 'odd',
      color: 'black'
    },
    '14': {
      index: 15,
      number: '14',
      row: 2,
      column: 2,
      zone: 'low',
      parity: 'even',
      color: 'red'
    },
    '15': {
      index: 16,
      number: '15',
      row: 3,
      column: 2,
      zone: 'low',
      parity: 'odd',
      color: 'black'
    },
    '16': {
      index: 17,
      number: '16',
      row: 1,
      column: 2,
      zone: 'low',
      parity: 'even',
      color: 'red'
    },
    '17': {
      index: 18,
      number: '17',
      row: 2,
      column: 2,
      zone: 'low',
      parity: 'odd',
      color: 'black'
    },
    '18': {
      index: 19,
      number: '18',
      row: 3,
      column: 2,
      zone: 'low',
      parity: 'even',
      color: 'red'
    },
    '19': {
      index: 20,
      number: '19',
      row: 1,
      column: 2,
      zone: 'high',
      parity: 'odd',
      color: 'black'
    },
    '20': {
      index: 21,
      number: '20',
      row: 2,
      column: 2,
      zone: 'high',
      parity: 'even',
      color: 'black'
    },
    '21': {
      index: 22,
      number: '21',
      row: 3,
      column: 2,
      zone: 'high',
      parity: 'odd',
      color: 'red'
    },
    '22': {
      index: 23,
      number: '22',
      row: 1,
      column: 2,
      zone: 'high',
      parity: 'even',
      color: 'black'
    },
    '23': {
      index: 24,
      number: '23',
      row: 2,
      column: 2,
      zone: 'high',
      parity: 'odd',
      color: 'red'
    },
    '24': {
      index: 25,
      number: '24',
      row: 3,
      column: 2,
      zone: 'high',
      parity: 'even',
      color: 'black'
    },
    '25': {
      index: 26,
      number: '25',
      row: 1,
      column: 2,
      zone: 'high',
      parity: 'odd',
      color: 'red'
    },
    '26': {
      index: 27,
      number: '26',
      row: 2,
      column: 2,
      zone: 'high',
      parity: 'even',
      color: 'black'
    },
    '27': {
      index: 28,
      number: '27',
      row: 3,
      column: 2,
      zone: 'high',
      parity: 'odd',
      color: 'red'
    },
    '28': {
      index: 29,
      number: '28',
      row: 1,
      column: 3,
      zone: 'high',
      parity: 'even',
      color: 'red'
    },
    '29': {
      index: 30,
      number: '29',
      row: 2,
      column: 3,
      zone: 'high',
      parity: 'odd',
      color: 'black'
    },
    '30': {
      index: 31,
      number: '30',
      row: 3,
      column: 3,
      zone: 'high',
      parity: 'even',
      color: 'red'
    },
    '31': {
      index: 32,
      number: '31',
      row: 1,
      column: 3,
      zone: 'high',
      parity: 'odd',
      color: 'black'
    },
    '32': {
      index: 33,
      number: '32',
      row: 2,
      column: 3,
      zone: 'high',
      parity: 'even',
      color: 'red'
    },
    '33': {
      index: 34,
      number: '33',
      row: 3,
      column: 3,
      zone: 'high',
      parity: 'odd',
      color: 'black'
    },
    '34': {
      index: 35,
      number: '34',
      row: 1,
      column: 3,
      zone: 'high',
      parity: 'even',
      color: 'red'
    },
    '35': {
      index: 36,
      number: '35',
      row: 2,
      column: 3,
      zone: 'high',
      parity: 'odd',
      color: 'black'
    },
    '36': {
      index: 37,
      number: '36',
      row: 3,
      column: 3,
      zone: 'high',
      parity: 'even',
      color: 'red'
    },
  },
}

data.numbers = Object.keys(data.characteristics);

module.exports = data;