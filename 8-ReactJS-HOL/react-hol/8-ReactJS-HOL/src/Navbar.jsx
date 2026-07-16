import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px',
    fontSize: '16px'
  }

  return (
    <nav style={{ backgroundColor: '#333', padding: '14px 24px' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  )
}

export default Navbar
