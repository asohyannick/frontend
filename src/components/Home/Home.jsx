import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Start working from here <strong>Home Component file</strong> ..</h1>
      {/* Components... */}
      <Link to='/spinner'>Spinner</Link>
      <Link to='/animation'>Animation</Link>
      <Link to='/animationCard'>AnimationCard</Link>
      <Link to='/accomp'> Accomplishment</Link>
      <Link to='/navbar'>Navbar</Link>
      <Link to='/about'> About</Link> 
      <Link to='/accord'>Accord</Link> 
      <Link to='/achieves'> Achievements</Link> 
      <Link to='/article'>Article</Link> 
      <Link to='/aside'>Aside</Link> 
      <Link to='/buttons'>Button</Link> 
      <Link to='/cart'> Cart</Link> 
      <Link to='/cartContainer'> CartContainer</Link> 
      <Link to='/classic'> Classic</Link> 
      <Link to='/collections'> Collections</Link> 
      <Link to='/congrats'> Congrats</Link> 
      <Link to='/cookies'> Cookies</Link> 
      <Link to='/dataCollections'> dataCollections</Link> 
      <Link to='/detailPage'> detailPage</Link> 
      <Link to='/enterPrise'> EnterPrise</Link> 
      <Link to='/errorPages'> ErrorPages</Link> 
      <Link to='/food'>Food</Link> 
      <Link to='/form'> Form</Link> 
      <Link to='/garden'> Garden</Link> 
      <Link to='/info'> Information</Link> 
      <Link to='/legend'> Legend</Link> 
      <Link to='/grace'> Grace</Link> 
      <Link to='/hero'> Hero</Link> 
      <Link to='/modal'> Modal</Link> 
      <Link to='/model'>Model</Link> 
      <Link to='/modern'> Modern</Link> 
      <Link to='/navigator'>Navigator</Link> 
      <Link to='/payment'>payment</Link> 
      <Link to='/projects'>Project</Link>
      <Link to='/products'>Products</Link> 
      <Link to='/reactSlider'>reactSlider</Link> 
      <Link to='/reactWrapper'> reactWrapper</Link> 
      <Link to='/sectionWrapper'> sectionWrapper</Link> 
      <Link to='/services'> Services</Link> 
      <Link to='/shopping'> Shopping</Link> 
      <Link to='/sidebar'> Sidebar</Link> 
      <Link to='/stripe'>Stripe</Link> 
      <Link to='/tech'>Tech</Link> 
      <Link to='/terms'>Terms</Link> 
      <Link to='/statistics'>Statistics</Link> 
      <Link to='/income'>Income</Link> 
      <Link to='/great'>Great</Link> 
      <Link to='/glorious'>Glorious</Link> 
      <Link to='/excellence'>Excellence</Link> 
      <Link to='/duty'>Duty</Link> 
      <Link to='/contact'>Contact</Link> 
      <Link to='/card'>Card</Link> 
      <Link to='/access'>Access</Link> 
      <Link to='/background'>Background</Link> 
      <Link to='/avatar'> Avatar</Link> 
      <Link to='/worthy'> Worthy</Link> 
      <Link to='/happy'> Happy</Link> 
      <Link to='/approval'> Approval</Link> 
      <Link to='/discipline'> Discipline</Link> 
      <Link to='/favor'> Favor</Link> 
      <Link to='/success'> Success</Link> 
      <Link to='/footer'> Footer</Link> 
      <Link to='/login'>Login</Link>
      <Link to='/signUp'>SignUp</Link>
      {/* Pages... */}
      <Link to='/accounts'>Account</Link>
    </>
  );
}

export default Home;
