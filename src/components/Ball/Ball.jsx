import React from 'react'

import './Ball.css'

export const Ball = (props) => {
  const { number, image, isActived, functionSelected, team } = props;

  return (
    <div  className={`container_ball ${ ( isActived && team === 'OUR') ? 'active' : ''}`}>
      <img onClick={() => functionSelected(number)} className='image__ball' src={image} alt={number} />
    </div>
  )
}
