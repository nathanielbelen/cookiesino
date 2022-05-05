import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Controls = ({ sendNumber, sendRoll, setBalance, balance, setBet, bet, inside, outside, user, setUser }) => {

  const handleChange = (e, newValue) => {
    setBet(newValue)
    console.log('value', newValue)
  };

  return (
    <Stack spacing={2}>
      <Paper styles={{ textAlign: 'center'}}>
        <Box sx={{ height: '30vh' }}></Box>
      </Paper>
      <Paper styles={{ textAlign: 'center' }}>
        <Box sx={{ height: '30vh' }}>
          <Typography variant='h3'>Current bets: </Typography>
          <Avatar>J</Avatar>
          <Typography variant='h6'>{user}</Typography>
        </Box>
      </Paper>
      <Box styles={{ textAlign: 'center'}}>
        <Card>
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant='h2' color="text.secondary">
              ${numberWithCommas(balance)}.00
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">ADD BALANCE</Button>
          </CardActions>
        </Card>
      </Box>
      <Box>
        <Button fullWidth size='large' color='primary' variant='outlined' sx={{ height: 100 }}>SUBMIT BET</Button>
      </Box>
    </Stack>
  )
}

export default Controls;