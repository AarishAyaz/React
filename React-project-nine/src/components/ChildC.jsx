import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App'

const ChildC = () => {
    const user= useContext(UserContext);
    const {theme,setTheme} = useContext(ThemeContext);

    function handleTheme(){
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
  return (
     <div>
        {user.name}
        <button onClick={handleTheme}>
            Change Theme
        </button>
    </div>
  )
}

export default ChildC
