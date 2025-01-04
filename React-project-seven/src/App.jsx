import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick(){
    alert("I got clicked")
  }
  function handleMouseOver(){
    alert("I am on Paragraph")
  }
  function handleInputChange(e){
    console.log("The value in input field is changed to" , e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Form Submitted successfully!")
  }
  return (
      <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleInputChange} />
          <button type='submit'>Submit</button>
      </form>
 
 
 
 
    // <div>
  //   <p onMouseOver={handleMouseOver}>
  //     My name is Aarish Ayaz
  //   </p>
  //   <button onClick={handleClick}>
  //     Click Me
  //   </button>
  // </div>
  )
}

export default App
