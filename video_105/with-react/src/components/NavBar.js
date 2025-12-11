import React from 'react'

const NavBar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default NavBar
