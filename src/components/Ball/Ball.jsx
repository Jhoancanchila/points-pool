import React from 'react'

import './Ball.css'

export const Ball = (props) => {
  const { number, image, isActived, functionSelected } = props;

  return (
    <div onClick={() => functionSelected(number)}  className={`container_ball ${ isActived ? 'active' : ''}`}>
      <img className='image__ball' src={image} alt='ball' />
    </div>
  )
}
