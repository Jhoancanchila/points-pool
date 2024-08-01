import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { Ball } from '../Ball/Ball'

export const Game = ({ title, ballList }) => {

  const [data, setData] = useState(ballList)
  const [value, setValue] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalPointsBalls, setTotalPointsBalls] = useState(0)

  const handleActiveBall = ( number ) => {

    const newData = data.map(ball => {
      if (ball.number === number) {
        return {
          ...ball,
          isActived: !ball.isActived
        }
      }else{
        return ball
      }
    })
    setData(newData);
    const totalBalls = newData.filter(ball => ball.isActived).reduce((acc, ball) => acc + ball.count, 0);
    setTotalPointsBalls(totalBalls);
  };

  useEffect(() => {    
    const totalPoints = totalPointsBalls - value;
    setTotal(totalPoints)
  }, [value, totalPointsBalls])

  return (
    <div>
      <h1>{ `${ title } ${ total } puntos` }</h1>
      <div className='container__our'>
        {
          data.map(ball => (
            <Ball key={ball.number} {...ball } functionSelected={handleActiveBall}/>
          ))
        }
      </div>
      <Input inputValue={value} setValueInput={setValue}/>
    </div>
  )
}
