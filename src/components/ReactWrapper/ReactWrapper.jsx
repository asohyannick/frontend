import React from 'react'
import './ReactWrapper.css';
import { Link } from "react-router-dom";
const ReactWrapper = () => {
  return (
    <div>ReactWrapper
       <Link to='/'> Go Back to Home</Link>
    </div>
  )
}

export default ReactWrapper;