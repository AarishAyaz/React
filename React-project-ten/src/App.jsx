import './App.css'
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom"
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import ParamComp from './components/ParamComp'
import Notfound from './components/Notfound'
// const router= createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<div>
//         <Navbar />
//         <Home />
//       </div>
//     },
//     {
//       path:"/Dashboard",
//       element:<div>
//         <Navbar />
//         <Dashboard />
//       </div>
//     },
//     {
//       path:"/About",
//       element:<div>
//         <Navbar />
//         <About />
//       </div>
//     }
//   ]
// )




function App() {
 

  return (
   <div>

    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/students/:id' element={<ParamComp/>} />
      <Route path='*' element={<Notfound/>} />


    </Routes>
    {/* <RouterProvider router={router} /> */}
    Hello
   </div>
  )
}

export default App
