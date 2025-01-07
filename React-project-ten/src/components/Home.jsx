import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  function handleClick(){
    navigate('./about');
  }
  return (
    <div>
      Homepage
      <button onClick={handleClick}>Move to About page</button>
    </div>
  )
}

export default Home
