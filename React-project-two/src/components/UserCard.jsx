import React from 'react'
import Aarish from '../assets/Aarish.jpg'
import './UserCard.css'
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p className='user-name'>{props.name}</p>
      <img className='user-img' src={props.image} alt={props.name}></img>
      <p className='user-desc'> {props.desc}</p>
    </div>
  )
}

export default UserCard
