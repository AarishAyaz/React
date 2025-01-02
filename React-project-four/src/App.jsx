import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
const[count,setCount]=useState(0);
function handleClick(){
  setCount(count+1);
}

  return (
    <div>
      <div className='counter'>
        <h1>Count: {count}</h1>
        <Button handleClick={handleClick}/>
      </div>
      <Card>
        <h1>Hello from Aarish</h1>
        <p>How are u doing?</p>
      </Card>
      
      
    </div>
  )
}

export default App
