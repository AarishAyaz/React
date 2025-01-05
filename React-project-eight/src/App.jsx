import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal] = useState(1);
  function handleClick(){
    setCount(count+1);
  }

  function handleTotal(){
    setTotal(total+1);
  }

//  useEffect(() => {
//    alert("I will run on every render")
//  })
//  useEffect(() => {
//    alert("I will run on only first render")
 
  
//  }, [])
//  useEffect(() => {
//    alert("I will run only when count is updated")
 
   
//  }, [count])
//  useEffect(() => {
//    alert("Runs only when change is detected in Count or Total")
 

//  }, [total,count])
 
useEffect(() => {
  alert("Count is updated")

  return () => {
    alert("COunt is unmounted from UI")
  }
}, [count])

  return (
  <div>
    <h1>The Count is : {count}</h1>
    <button onClick={handleClick}>
      Click me
    </button>

    <h1>The Total is : {total}</h1>
    <button onClick={handleTotal}>
      Click me
    </button>
  </div>
  )
}

export default App
