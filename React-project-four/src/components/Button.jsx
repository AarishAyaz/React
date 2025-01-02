import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
         <button onClick={props.handleClick}>Click me</button>

    </div>
  )
}

export default Button
