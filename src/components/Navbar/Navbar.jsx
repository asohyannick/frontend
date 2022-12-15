import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to='/'> Click here to get the Home component.</Link>
    </div>
  )
}

export default Navbar
