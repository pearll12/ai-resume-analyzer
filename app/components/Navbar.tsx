import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='text-2xl font-extrabold text-gradient'>RESUMIND</Link>
      <Link to="/upload">
      <button className='primary-button text-2xl w-fit'>Upload Resume</button>
      </Link>
    </nav>
  )
}

export default Navbar