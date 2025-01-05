import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/childA'
const UserContext= createContext();
const ThemeContext= createContext();

function App() {
const [user,setUser] =useState({name:"Aarish"});
const [theme,setTheme]=useState("light")

  return (
    <>
     <div>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
     </div>
    </>
  )
}

export default App
export {UserContext} ;
export {ThemeContext}