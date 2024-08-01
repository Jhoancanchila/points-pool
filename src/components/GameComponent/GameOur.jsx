import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { Ball } from '../Ball/Ball'

export const GameOur = ({ title, ballList, setDataBalls, resetApp, setResetApp }) => {

  const [value, setValue] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalPointsBalls, setTotalPointsBalls] = useState(0)

  const handleActiveBall = ( number ) => {

    const newData = ballList.map(ball => {
      if (ball.number === number) {
        return {
          ...ball,
          isActived: !ball.isActived,
          team: !ball.isActived ? 'OUR' : 'THEIR'
        }
      }else{
        return ball
      }
    })
    setDataBalls(newData);
    const totalBalls = newData.filter(ball => ball.isActived).reduce((acc, ball) => acc + ball.count, 0);
    setTotalPointsBalls(totalBalls);
  };

  useEffect(() => {
    if (resetApp) {
      setValue(0)
      setTotalPointsBalls(0)
      setTotal(0)
      setResetApp(false)
    }
  }, [resetApp])

  useEffect(() => {    
    const totalPoints = totalPointsBalls - value;
    setTotal(totalPoints)
  }, [value, totalPointsBalls])

  return (
    <div>
      <h1>{ `${ title } ${ total } puntos` }</h1>
      <div className='container__our'>
        {
          ballList.map(ball => (
            <Ball key={ball.number} {...ball } functionSelected={handleActiveBall}/>
          ))
        }
      </div>
      <Input inputValue={value} setValueInput={setValue}/>
    </div>
  )
}
