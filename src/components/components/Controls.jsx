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

const Controls = ({ sendNumber, sendRoll, setBalance, balance, setBet, bet, inside, outside }) => {

  const handleChange = (e, newValue) => {
    setBet(newValue)
    console.log('value', newValue)
  };

  return (
    <Container>
      <Button variant="contained" onClick={sendNumber} sx={{ m: 1 }}>send state</Button>
      <Button variant="contained" onClick={sendRoll} sx={{ m: 1 }}>roll</Button>
      <FormControl>
        <Tabs value={bet} onChange={handleChange} aria-label="icon label tabs example">
          <Tab value={10} icon={<PaidTwoToneIcon />} label="10" />
          <Tab value={100} icon={<PaidTwoToneIcon />} label="100" />
          <Tab value={500} icon={<PaidTwoToneIcon />} label="500" />
          <Tab value={1000} icon={<PaidTwoToneIcon />} label="1000" />
        </Tabs>
      </FormControl>
      <Typography variant='h3'>Balance: </Typography>
      <Typography variant='h3'>Current bets: </Typography>
    </Container>
  )
}

export default Controls;