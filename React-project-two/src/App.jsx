import './App.css'
import UserCard from './components/UserCard'
import Aarish from './assets/Aarish.jpg'
import Akhyar from './assets/akhyar.jpg'
import uzair from './assets/uzair.jpg'

function App() {

  return (
    <>
     <div className="container">
      <UserCard name="Aarish Ayaz" image={Aarish} desc="Full stack developer" style={{"border-radius":"15px"}}/>
      <UserCard name="Akhyar" image={Akhyar} desc="Economist"/>
      <UserCard name="Uzair" image={uzair} desc="Data Scientist"/>
     </div>
    </>
  )
}

export default App
