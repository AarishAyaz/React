import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <input type='text'onChange={(e)=>props.setName(e.target.value)}></input>
      <p>The name is {props.name}</p>
    </div>
  )
}

export default Card
