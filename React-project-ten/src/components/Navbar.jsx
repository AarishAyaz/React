import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
