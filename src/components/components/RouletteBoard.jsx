import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid, { Item } from '@mui/material/Grid';

let color = {
  '00': 'green',
  0: 'green',
  1: 'red',
  2: 'black',
  3: 'red',
  4: 'black',
  5: 'red',
  6: 'black',
  7: 'red',
  8: 'black',
  9: 'red',
  10: 'black',
  11: 'black',
  12: 'red',
  13: 'black',
  14: 'red',
  15: 'black',
  16: 'red',
  17: 'black',
  18: 'red',
  19: 'black',
  20: 'black',
  21: 'red',
  22: 'black',
  23: 'red',
  24: 'black',
  25: 'red',
  26: 'black',
  27: 'red',
  28: 'red',
  29: 'black',
  30: 'red',
  31: 'black',
  32: 'red',
  33: 'black',
  34: 'red',
  35: 'black',
  36: 'red',
};

const RouletteBoard = ({ inside, setInside, outside, setOutside, bet, bets, setBets }) => {

  const insideOnClick = (e) => {
    let newInside = { ...inside };
    let newBets = [...bets, [e.target.value, bet]]
    newInside[e.target.value] = bet;
    setInside(newInside);
    setBets(newBets)
    console.log('we clickin inside')
  }

  const outsideOnClick = (e) => {
    let newOutside = { ...outside };
    let newBets = [...bets, [e.target.value, bet]]
    let obj = {};
    obj[e.target.value] = bet;
    if (!newOutside[e.target.title]) {
      newOutside[e.target.title] = obj
    } else {
      newOutside[e.target.title][e.target.value] = bet
    }
    console.log('we clickin outside')
    setOutside(newOutside);
    setBets(newBets);
  }

  return (
    <>
      <Grid container spacing={0} columns={14}>
        <Grid item xs={1}>
          <Button variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={'00'} onClick={insideOnClick} color={'green'} sx={{ color: '#fff' }}>00</Button>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained" fullWidth={true} color={'black'} style={{maxHeight: '60px', minHeight: '60px'}}>
            {[3,6,9,12,15,18,21,24,27,30,33,36].map((num, index) => <Button onClick={insideOnClick} key={index} value={num.toString()} color={color[num]} sx={{ borderColor: 'black.main', color: '#fff' }}>{num}</Button>)}
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={3} title={'row'} onClick={outsideOnClick} color={'green'} sx={{ color: '#fff' }}>ROW 3</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={'00'} onClick={insideOnClick} color={'green'} sx={{ color: '#fff' }}>0</Button>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}}>
            {[2,5,8,11,14,17,20,23,26,29,32,35].map((num, index) => <Button onClick={insideOnClick} key={index} value={num.toString()} color={color[num]} sx={{ borderColor: '#fff', color: '#fff' }}>{num}</Button>)}
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={2} title={'row'} onClick={outsideOnClick} color={'green'} sx={{ color: '#fff' }}>ROW 2</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}}>
            {[1,4,7,10,13,16,19,22,25,28,31,34].map((num, index) => <Button onClick={insideOnClick} key={index} value={num.toString()} color={color[num]} sx={{ borderColor: 'black.main', color: '#fff' }}>{num}</Button>)}
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={1} title={'row'} onClick={outsideOnClick} color={'green'} sx={{ color: '#fff' }}>ROW 1</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={4}>
         <Button variant="contained" fullWidth={true} value={1} title={'column'} onClick={outsideOnClick} color={'green'} sx={{ color: '#fff' }}>COLUMN 1</Button>
        </Grid>
        <Grid item xs={4}>
         <Button variant="contained" fullWidth={true} value={2} title={'column'} onClick={outsideOnClick} color={'green'} sx={{ color: '#fff' }}>COLUMN 2</Button>
        </Grid>
        <Grid item xs={4}>
         <Button variant="contained" fullWidth={true} value={3} title={'column'} onClick={outsideOnClick} color={'green'} sx={{ color: '#fff' }}>COLUMN 3</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={1}>
        </Grid>
        <Grid item xs={2}>
         <Button variant="contained" fullWidth={true} value={'low'} title={'zone'} onClick={outsideOnClick} color={'gray'} sx={{ color: '#fff' }}>1-18</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="contained" fullWidth={true} value={'even'} title={'parity'} onClick={outsideOnClick} color={'gray'} sx={{ color: '#fff' }}>Even</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="contained" fullWidth={true} value={'red'} title={'color'} onClick={outsideOnClick} color={'red'} sx={{ color: '#fff' }}>Red</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="contained" fullWidth={true} value={'black'} title={'color'} onClick={outsideOnClick} color={'black'} sx={{ color: '#fff' }}>Black</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="contained" fullWidth={true} value={'odd'} title={'parity'} onClick={outsideOnClick} color={'gray'} sx={{ color: '#fff' }}>Odd</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="contained" fullWidth={true} value={'high'} title={'zone'} onClick={outsideOnClick} color={'gray'} sx={{ color: '#fff' }}>19-36</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>

      </Grid>
    </>
  )
}

/*
  inside: 36,
  row: 3,
  column: 3,
  zone: 2,
  parity: 2,
  color: 2,
*/
export default RouletteBoard;