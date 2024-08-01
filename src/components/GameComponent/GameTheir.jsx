import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { Ball } from '../Ball/Ball'

export const GameTheir = ({ title, ballList, setDataBalls, setResetApp, resetApp }) => {

  const [value, setValue] = useState(0)
  const [total, setTotal] = useState(0)

  const filterTheirBallList = ( ball ) => {
    if(!ball.isActived){
      return ball
    }
  };

  useEffect(() => {
    if (resetApp) {
      setValue(0)
      setTotal(0)
      setResetApp(false)
    }
  }, [resetApp])

  useEffect(() => {    
    const totalPoints = ballList.filter(filterTheirBallList).reduce((acc, ball) => acc + ball.count, 0);
    setTotal(totalPoints - value);

  }, [value, ballList])

  return (
    <div>
      <h1>{ `${ title } ${ total } puntos` }</h1>
      <div className='container__our'>
        {
          ballList.filter(filterTheirBallList).map(ball => (
            <Ball 
              key={ball.number} 
              {...ball } 
              functionSelected={() =>null}
            />
          ))
        }
      </div>
      <Input inputValue={value} setValueInput={setValue}/>
    </div>
  )
}
