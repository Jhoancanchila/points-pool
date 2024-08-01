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
import { Game } from './components/GameComponent/Game';

function App() {

  const ballList = [
    {
      number:3,
      image: three,
      count:6,
      isActived: false
    },
    {
      number:4,
      image: four,
      count:4,
      isActived: false
    },
    {
      number:5,
      image: five,
      count:5,
      isActived: false
    },
    {
      number:6,
      image: six,
      count:6,
      isActived: false
    },
    {
      number:7,
      image: seven,
      count:7,
      isActived: false
    },
    {
      number:8,
      image: eight,
      count:8,
      isActived: false
    },
    {
      number:9,
      image: nine,
      count:9,
      isActived: false
    },
    {
      number:10,
      image: ten,
      count:10,
      isActived: false
    },
    {
      number:11,
      image: eleven,
      count:11,
      isActived: false
    },
    {
      number:12,
      image: twelve,
      count:12,
      isActived: false
    },
    {
      number:13,
      image: thirteen,
      count:13,
      isActived: false
    },
    {
      number:14,
      image: fourteen,
      count:14,
      isActived: false
    },
    {
      number:15,
      image: fifteen,
      count:15,
      isActived: false
    },
  ];

  return (
    <>
      <Game title='Mí partida' ballList={ballList}/>
      <hr />
      <Game title='Su partida' ballList={ballList}/>
    </>
  )
}

export default App
