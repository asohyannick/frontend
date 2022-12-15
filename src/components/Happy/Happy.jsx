import React from 'react'
import './Happy.css';
import { Link } from "react-router-dom";
const Happy = () => {
  return (
    <div>Happy
       <Link to='/'> Go Back to Home</Link>
    </div>
  )
}

export default Happy;