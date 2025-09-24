import React from 'react'
import {Link} from 'react-router-dom'
import './Style/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src="./Images/MKT-logo.png" alt="" />
      <div className='account'>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
      </div>
    </div>
    
  )
}

export default Navbar
