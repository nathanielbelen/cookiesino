import React, { useState, useEffect, useRef } from 'react';
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
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import TextField from '@mui/material/TextField';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Bet = ({ name, amount }) => {
  return (
  <Paper sx={{ m: '3px', height: 60, width: 60, verticalAlign: 'bottom', display: 'table-cell'}}>
    <Box sx={{ position: "relative", textAlign: 'center' }}>
      <Typography variant='button'>{name}</Typography>
    </Box>
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant='overline'>${amount}</Typography>
    </Box>
  </Paper>)
}

const Controls = ({ sendNumber, sendRoll, setBalance, balance, setBet, bet, inside, outside, user, setUser, bets, messages, sendMessage }) => {

  const [message, setMessage] = useState('');
  // const [messagesA, setMessagesA] = useState('');

  const chatContainer = useRef();

  const scrollToMyRef = () => {
    const scroll =
      chatContainer.current.scrollHeight -
      chatContainer.current.clientHeight;
    chatContainer.current.scrollTo(0, scroll);
  };

  useEffect(() => {
    scrollToMyRef();
  }, [messages])

  const handleChange = (e) => {
    setMessage(e.target.value)
  };

  // const handleText = (e) => {
  //   setMessage(e.target.value);
  //   console.log(message)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(JSON.stringify({ text: message, type: 'message', user: user }))
    setMessage('')
  }

  let messagesEnd;

  return (
    <Stack spacing={2}>
      <Paper styles={{ textAlign: 'center'}}>
        <Box ref={chatContainer} sx={{ height: '40vh', overflow: 'auto' }} component="div">
          {messages.map((message, index) => {
            if (message.type === 'message') {
              if (message.user === user) {
                return (
                  <Alert severity="info" icon={false}>
                    <AlertTitle>{message.user}</AlertTitle>
                    {message.text}
                  </Alert>
                )
              } else {
                return (
                  <Alert severity="warning" icon={false}>
                    <AlertTitle>{message.user}</AlertTitle>
                    {message.text}
                  </Alert>
                )
              }
            } else if (message.type === 'winner') {
              return (
                <Alert severity="success">{message.user} {message.text}</Alert>
              )
            }
          })}
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { messagesEnd = el; }}>
          </div>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <TextField autoComplete="new-password" id="standard-basic" variant="outlined" fullWidth value={message} onChange={handleChange}/>
          </form>
        </Box>
      </Paper>
      <Paper styles={{ textAlign: 'center', pt: 2 }}>
        <Box sx={{ height: '18vh', padding: 2, display: 'flex', flexWrap: 'wrap' }}>
          {bets.map((bet, index) => <Bet name={bet[0]} amount={bet[1]} />)}
        </Box>
      </Paper>
      <Box styles={{ textAlign: 'center'}}>
        <Card>
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant='h2' color="text.secondary">
              ${numberWithCommas(balance)}.00
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Button size="small">ADD BALANCE</Button>
            <Avatar onClick={sendRoll}>{user.substring(0, 1)}</Avatar>
          </CardActions>
        </Card>
      </Box>
      <Box>
        <Button fullWidth onClick={sendNumber} size='large' color='primary' variant='contained' sx={{ height: 100, color: '#fff' }}>SUBMIT BET</Button>
      </Box>
    </Stack>
  )
}

export default Controls;