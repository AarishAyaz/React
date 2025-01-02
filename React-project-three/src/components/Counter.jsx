import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
  const[count,setcount]=useState(0);
    return (
    <div className='counter-container'>
      <h1 className='heading'>The Count is {count}</h1>
      <button className='btn' onClick={()=>{setcount(count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter
