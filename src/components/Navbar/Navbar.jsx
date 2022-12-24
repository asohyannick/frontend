import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
const Navbar = () => {
  const [ navOpen, SetNavOpen ] = useState(false);
  return (
    <article>
      <nav className='nav-section-container'>
        <ul className='nav-ui'>
          <li className='nav-ui-items'>
            <Link to='/about'>About</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/acess'>Access</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/collections'>Collections</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/enterPrise'>EnterPrise</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/payment'>Payments</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/products'>products</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/duty'>Duty</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/discipline'>Discipline</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/accomp'>Accomplishments</Link>
          </li>
          <li className='nav-ui-items'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='nav-ui-items'>
            <button className='navbar-btn'>
              <Link to='/buttons'>Sign up</Link>
            </button>
          </li>
          <li className='nav-ui-items'>
            <button className='nav-btn'>
              <Link to='/buttons'>Login</Link>
            </button>
          </li>
          <li className='nav-ui-items'>
            <Link to='/cookies'>Cookies</Link>
          </li>
        </ul>
        <button onClick={() => SetNavOpen(!navOpen)}>
          < FaAlignJustify/>
        </button>
      </nav>
      
      <Link to='/'> Click here to get the Home component.</Link>
    </article>
  )
}

export default Navbar
