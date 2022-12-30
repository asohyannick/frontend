import React from 'react'
import './About.css';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      About
      <Link to='/navbar'>nav</Link> 
    </div>
  );
}

export default About;