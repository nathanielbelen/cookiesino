import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid, { Item } from '@mui/material/Grid';

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
    newOutside[e.target.title] = obj
    console.log('we clickin outside')
    setOutside(newOutside);
    setBets(newBets);
  }

  return (
    <>
      <Grid container spacing={0} columns={14}>
        <Grid item xs={1}>
          <Button variant="outlined" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={'00'} onClick={insideOnClick}>00</Button>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}}>
            {[3,6,9,12,15,18,21,24,27,30,33,36].map((num, index) => <Button onClick={insideOnClick} key={index} value={num.toString()}>{num}</Button>)}
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={3} title={'row'} onClick={outsideOnClick}>ROW 3</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={'00'} onClick={insideOnClick}>0</Button>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}}>
            {[2,5,8,11,14,17,20,23,26,29,32,35].map((num, index) => <Button onClick={insideOnClick} key={index} value={num.toString()}>{num}</Button>)}
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={2} title={'row'} onClick={outsideOnClick}>ROW 2</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}}>
            {[1,4,7,10,13,16,19,22,25,28,31,34].map((num, index) => <Button onClick={insideOnClick} key={index} value={num.toString()}>{num}</Button>)}
          </ButtonGroup>
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" fullWidth={true} style={{maxHeight: '60px', minHeight: '60px'}} value={1} title={'row'} onClick={outsideOnClick}>ROW 1</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={4}>
         <Button variant="outlined" fullWidth={true} value={1} title={'column'} onClick={outsideOnClick}>COLUMN 1</Button>
        </Grid>
        <Grid item xs={4}>
         <Button variant="outlined" fullWidth={true} value={2} title={'column'} onClick={outsideOnClick}>COLUMN 2</Button>
        </Grid>
        <Grid item xs={4}>
         <Button variant="outlined" fullWidth={true} value={3} title={'column'} onClick={outsideOnClick}>COLUMN 3</Button>
        </Grid>
        <Grid item xs={1}>
        </Grid>

        <Grid item xs={1}>
        </Grid>
        <Grid item xs={2}>
         <Button variant="outlined" fullWidth={true} value={'low'} title={'zone'} onClick={outsideOnClick}>1-18</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="outlined" fullWidth={true} value={'even'} title={'parity'} onClick={outsideOnClick}>Even</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="outlined" fullWidth={true} value={'red'} title={'color'} onClick={outsideOnClick}>Red</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="outlined" fullWidth={true} value={'black'} title={'color'} onClick={outsideOnClick}>Black</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="outlined" fullWidth={true} value={'odd'} title={'parity'} onClick={outsideOnClick}>Odd</Button>
        </Grid>
        <Grid item xs={2}>
         <Button variant="outlined" fullWidth={true} value={'high'} title={'zone'} onClick={outsideOnClick}>19-36</Button>
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