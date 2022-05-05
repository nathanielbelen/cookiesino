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
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CheckIcon from '@mui/icons-material/Check';

const client = new W3CWebSocket('ws://localhost:8080');
client.binaryType = "arraybuffer";

const App = () => {
  const [connected, setConnected] = useState(true);
  const [user, setUser] = useState('jessica');
  const [inside, setInside] = useState({});
  const [outside, setOutside] = useState({});
  const [bet, setBet] = useState(50);
  const [bets, setBets] = useState([]);
  const [balance, setBalance] = useState(100000);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winnings, setWinnings] = useState(0);
  const [displayWin, setDisplayWin] = useState(false);
  const [displayLoss, setDisplayLoss] = useState(false);
  const [displayWait, setDisplayWait] = useState(false);
  const [displayAmount, setDisplayAmount] = useState(0);

  useEffect(() => {
    console.log(`inside changed to be ${inside}!`)
  }, [inside])

  useEffect(() => {
    console.log(`inside changed to be ${outside}!`)
  }, [outside])

  useEffect(() => {
    console.log(bets)
  }, [bets])

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
          setWinnings(messageParse.winnings)
        } else {
          setTimeout(() => {
            setDisplayLoss(true);
          }, 2000)
        }
        setBets([]);
        setMustSpin(true);
        setInside({})
        setOutside({})
      } else {
        console.log(messageParse.message)
      }
    };
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log(`congrats YOU WON ${winnings}`)
      setDisplayAmount(winnings);
      setBalance(balance + winnings);
      setWinnings(0);
    }, 2000)
  }, [winnings])

  useEffect(() => {
    if (displayAmount !== 0) {
      setDisplayWin(true);
      setTimeout(() => {
        setDisplayWin(false);
        setDisplayAmount(0);
      }, 5000)
    }
  }, [displayAmount])

  useEffect(() => {
    if (displayLoss === true) {
      setTimeout(() => {
        setDisplayLoss(false);
      }, 5000)
    }
  }, [displayLoss])

  const sendNumber = () => {
    let total = 0;
    for (let key in inside) {
      total += inside[key];
    }
    for (let key in outside) {
      for (let key2 in outside[key]) {
        total += outside[key][key2]
      }
    }
    let bet = {
      inside: inside,
      outside: outside
    }
    let balanceCopy = balance
    setDisplayWait(true);
    setBalance(balanceCopy - total);
    console.log(JSON.stringify(bet));
    client.send(JSON.stringify({ message: bet, type: 'bet', from: user }));
  }

  const sendRoll = () => {
    console.log(({
      inside: inside,
      outside: outside
    }))
    setDisplayWait(false);
    client.send(JSON.stringify({ message: 'roll', type: 'roll', from: user }))
  }

  const handleChange = (e, newValue) => {
    setBet(newValue)
    console.log('value', newValue)
  };

  return (
    <Grid container spacing={0} columns={3} columnSpacing={2} style={{ padding: 20 }}>
      <Grid item xs={1} fixed>
        <Controls user={user} setUser={setUser} bet={bet} setBet={setBet} sendNumber={sendNumber} sendRoll={sendRoll} setBalance={setBalance} balance={balance} inside={inside} outside={outside} bets={bets}/>
      </Grid>
      <Grid item xs={2} fixed>
        <Container>
          <Box sx={{ width: 445, height: 445, m: 'auto' }}>
              <RouletteWheel mustSpin={mustSpin} setMustSpin={setMustSpin} prizeNumber={prizeNumber} />
          </Box>
        </Container>
        <Container>
          <RouletteBoard setInside={setInside} setOutside={setOutside} inside={inside} outside={outside} bet={bet} bets={bets} setBets={setBets}/>
        </Container>
        <Paper styles={{ textAlign: 'center'}}>
          <Tabs variant={'fullWidth'} value={bet} onChange={handleChange} centered>
            <Tab value={50} icon={<PaidTwoToneIcon />} label="$50" />
            <Tab value={250} icon={<PaidTwoToneIcon />} label="$250" />
            <Tab value={500} icon={<PaidTwoToneIcon />} label="$500" />
            <Tab value={1000} icon={<PaidTwoToneIcon />} label="$1000" />
          </Tabs>
        </Paper>
        {displayWin ?
          (
            <Alert severity="success">
              <AlertTitle>Congratulations!</AlertTitle>
              You won ${displayAmount}.00!
            </Alert>
          ) : null
        }
        {displayLoss ?
          (
            <Alert severity="error">
              <AlertTitle>Sorry</AlertTitle>
              No winning conditions pulled.
            </Alert>
          ) : null
        }
        {displayWait ?
          (
            <Alert severity="info">
              <AlertTitle>Waiting</AlertTitle>
              Currently waiting for next roll.
            </Alert>
          ) : null
        }
      </Grid>
    </Grid>
  )
}

export default App;