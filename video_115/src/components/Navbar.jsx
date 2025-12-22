import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black text-white'>
      <ul className='flex gap-5'>
        <NavLink className={(e)=>{return e.isActive?"text-red-800":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-red-800":""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-red-800":""}} to="/login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-red-800":""}} to="/username/{username}"><li>Username</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
