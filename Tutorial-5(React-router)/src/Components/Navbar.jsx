import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h1>Arshath</h1>
        <ul>
            <Link to="/" className='link'>Home</Link>
            <Link to="/users" className='link'>User</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/use" className='link'>Profile</Link>
        </ul>
    </nav>
  )
}

export default Navbar