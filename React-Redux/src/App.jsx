import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'
function App() {
  const [amount,setAmount]=useState(0);
  const count= useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementCLick(){
      dispatch(increment())
  }
  function handleDecrementClick(){
    dispatch(decrement())
  }
  function handleResetClick(){
    dispatch(reset())
  }
  function handleIncbyAmount(){
    dispatch(incrementByAmount(amount))
  }
  return (
    <div>
      <button onClick={handleIncrementCLick}>+</button>
      <p>Count is:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetClick}>Reset</button>
      <br/>
      <br/>
      <input type='Number' value={amount} placeholder='Enter amount' onChange={(e)=>setAmount(e.target.value)} />
      <br/>
      <br/>
      <button onClick={handleIncbyAmount}>Inc by Amount</button>
    </div>
  )
}

export default App
