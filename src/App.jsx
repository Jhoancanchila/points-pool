import { useState } from 'react'
import './App.css'

import three from './assets/3.png'
import four from './assets/4.png'
import five from './assets/5.png'
import six from './assets/6.png'
import seven from './assets/7.png'
import eight from './assets/8.png'
import nine from './assets/9.png'
import ten from './assets/10.png'
import eleven from './assets/11.png'
import twelve from './assets/12.png'
import thirteen from './assets/13.png'
import fourteen from './assets/14.png'
import fifteen from './assets/15.png'
import { GameOur } from './components/GameComponent/GameOur';
import { GameTheir } from './components/GameComponent/GameTheir';

function App() {

  const ballList = [
    {
      number:3,
      image: three,
      count:6,
      isActived: false,
      team: "THEIR"
    },
    {
      number:4,
      image: four,
      count:4,
      isActived: false,
      team: "THEIR"
    },
    {
      number:5,
      image: five,
      count:5,
      isActived: false,
      team: "THEIR"
    },
    {
      number:6,
      image: six,
      count:6,
      isActived: false,
      team: "THEIR"
    },
    {
      number:7,
      image: seven,
      count:7,
      isActived: false,
      team: "THEIR"
    },
    {
      number:8,
      image: eight,
      count:8,
      isActived: false,
      team: "THEIR"
    },
    {
      number:9,
      image: nine,
      count:9,
      isActived: false,
      team: "THEIR"
    },
    {
      number:10,
      image: ten,
      count:10,
      isActived: false,
      team: "THEIR"
    },
    {
      number:11,
      image: eleven,
      count:11,
      isActived: false,
      team: "THEIR"
    },
    {
      number:12,
      image: twelve,
      count:12,
      isActived: false,
      team: "THEIR"
    },
    {
      number:13,
      image: thirteen,
      count:13,
      isActived: false,
      team: "THEIR"
    },
    {
      number:14,
      image: fourteen,
      count:14,
      isActived: false,
      team: "THEIR"
    },
    {
      number:15,
      image: fifteen,
      count:15,
      isActived: false,
      team: "THEIR"
    },
  ];
  const [ dataBalls, setDataBalls ] = useState(ballList);
  const [ resetApp, setResetApp ] = useState(false);
  const resetData = () => {
    setDataBalls(ballList);
    setResetApp(true);
  }

  return (
    <>
      <button onClick={resetData}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#000000" d="M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95S18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0"/></svg>
      </button>
      <GameOur 
        title='Mí partida' 
        ballList={dataBalls}
        setDataBalls={setDataBalls}
        resetApp={resetApp}
        setResetApp={setResetApp}
      />
      <hr />
      <GameTheir
        title='Su partida' 
        ballList={dataBalls}
        setDataBalls={setDataBalls}
        resetApp={resetApp}
        setResetApp={setResetApp}
      />
    </>
  )
}

export default App
