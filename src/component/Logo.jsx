import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
    <div style={{width}}><Link to="/">
    <img src={logo} alt="Logo" className="w-16 h-auto rounded-full" /> {/* Adjusted logo size */}
  </Link></div>
  )
}

export default Logo