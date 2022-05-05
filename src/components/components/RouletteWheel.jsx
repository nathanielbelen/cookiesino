import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: '00', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '2', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '3', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '4', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '5', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '6', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '7', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '8', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '9', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '10', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '12', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '14', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '16', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '18', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '19', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '20', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '21', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '22', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '23', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '24', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '25', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '26', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '27', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '28', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '30', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '32', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '34', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '36', style: { backgroundColor: 'red', textColor: 'black' } },
]

const outerBorderColor = '#eeeeee';
const outerBorderWidth = 5;
const innerBorderColor = '#30261a';
const innerBorderWidth = 30;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 2;
const fontSize = 20;
const textDistance = 90;
const spinDuration = 1.0;

const RouletteWheel = ({ mustSpin, setMustSpin, prizeNumber }) => {

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        fontSize={fontSize}
        outerBorderColor={outerBorderColor}
        outerBorderWidth={outerBorderWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        radiusLineColor={radiusLineColor}
        radiusLineWidth={radiusLineWidth}
        spinDuration={spinDuration}
        perpendicularText={true}
        textDistance={textDistance}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        spinDuration={0.2}
      />
    </>
  )
}

export default RouletteWheel;