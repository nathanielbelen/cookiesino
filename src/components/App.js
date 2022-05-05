import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import RouletteBoard from './components/RouletteBoard.jsx'
import Controls from './components/Controls.jsx';
import RouletteWheel from './components/RouletteWheel.jsx';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const client = new W3CWebSocket('ws://localhost:8080');
client.binaryType = "arraybuffer";

const App = () => {
  const [connected, setConnected] = useState(true);
  const [user, setUser] = useState('jessica');
  const [inside, setInside] = useState({});
  const [outside, setOutside] = useState({});
  const [bet, setBet] = useState(10);
  const [balance, setBalance] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  useEffect(() => {
    console.log(`inside changed to be ${inside}!`)
  }, [inside])

  useEffect(() => {
    console.log(`inside changed to be ${outside}!`)
  }, [outside])

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setConnected(true);
    };
    client.onmessage = (message) => {
      let messageParse = JSON.parse(message.data);
      if (!messageParse.message) {
        setPrizeNumber(messageParse.roll)
        if (messageParse.winnings > 0) {
          setTimeout(() => {
            console.log(`congrats YOU WON ${messageParse.winnings}`)
          }, 2000)
        }
        setMustSpin(true);
        setInside({})
        setOutside({})
      } else {
        console.log(messageParse.message)
      }
    };
  }, [])

  const sendNumber = () => {
    let bet = {
      inside: inside,
      outside: outside
    }
    console.log(bet);
    client.send(JSON.stringify({ message: bet, type: 'bet', from: user }));
  }

  const sendRoll = () => {
    console.log({
      inside: inside,
      outside: outside
    })
    client.send(JSON.stringify({ message: 'roll', type: 'roll', from: user }))
  }

  return (
    <Grid container spacing={0} columns={3} columnSpacing={0} padding style={{ padding: 20 }}>
      <Grid item xs={1} fixed>
        <Controls bet={bet} setBet={setBet} sendNumber={sendNumber} sendRoll={sendRoll} setBalance={setBalance} balance={balance} inside={inside} outside={outside}/>
      </Grid>
      <Grid item xs={2} fixed>
        <Container>
          <Box sx={{ width: 445, height: 445, m: 'auto' }}>
              <RouletteWheel mustSpin={mustSpin} setMustSpin={setMustSpin} prizeNumber={prizeNumber} />
          </Box>
        </Container>
        <Container>
          <RouletteBoard setInside={setInside} setOutside={setOutside} inside={inside} outside={outside} bet={bet}/>
        </Container>
      </Grid>
    </Grid>
  )
}

export default App;