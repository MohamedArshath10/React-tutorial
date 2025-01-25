import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/users")
  }
  return (
    <nav>
        <h1>Arshath</h1>
        <ul>
            <Link to="/" className='link'>Home</Link>
            {/* <Link to="/users" className='link'>User</Link> */}
            <li onClick={handleClick}>User</li>
            <Link to="/about" className='link'>About</Link>
            <Link to="/use" className='link'>Profile</Link>
        </ul>
    </nav>
  )
}

export default Navbar