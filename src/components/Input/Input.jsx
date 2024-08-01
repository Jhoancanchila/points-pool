import React from 'react'
import './Input.css'

export const Input = ({ inputValue,setValueInput }) => {

  const handleChanges = (e) => {
    const value = e.target.value
    setValueInput(value)
  }

  return (
    <div className='container'>
      <input className='input' type='number'        placeholder='MALAS' 
      onChange={handleChanges}
      value={inputValue === 0 ? '' : inputValue}
      />
    </div>
  )
}
