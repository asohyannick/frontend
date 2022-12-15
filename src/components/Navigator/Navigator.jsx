import React from 'react'
import './Navigator.css';
import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <div>Navigator
       <Link to='/'> Go Back to Home</Link>
    </div>
  )
}

export default Navigator