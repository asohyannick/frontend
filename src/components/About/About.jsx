import React from 'react'
import './About.css';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      About
      <Link to='/'>Click to get to the home components...</Link> 
    </div>
  );
}

export default About;