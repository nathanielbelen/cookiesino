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
    <Stack spacing={3}>
      <Box styles={{ textAlign: 'center'}}>
        <Button variant="contained" onClick={sendNumber} sx={{ m: 1 }}>send state</Button>
        <Button variant="contained" onClick={sendRoll} sx={{ m: 1 }}>roll</Button>
      </Box>
      <Paper styles={{ textAlign: 'center'}}>
          <Tabs variant={'fullWidth'} value={bet} onChange={handleChange} centered>
            <Tab value={50} icon={<PaidTwoToneIcon />} label="50" />
            <Tab value={250} icon={<PaidTwoToneIcon />} label="250" />
            <Tab value={500} icon={<PaidTwoToneIcon />} label="500" />
            <Tab value={1000} icon={<PaidTwoToneIcon />} label="1000" />
          </Tabs>
      </Paper>
      <Paper styles={{ textAlign: 'center'}}>
        <Typography variant='h3'>Current bets: </Typography>
        <Avatar>J</Avatar>
        <Typography variant='h6'>{user}</Typography>
      </Paper>
      <Box>
        <Button fullWidth size='large' color='primary' variant='outlined' sx={{ height: 100 }}>SUBMIT BET</Button>
      </Box>
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
    </Stack>
  )
}

export default Controls;