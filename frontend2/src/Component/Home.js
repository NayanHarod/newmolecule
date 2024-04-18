import React from 'react'
import './Home.css'
import gemini from './gemin.json'
import Lottie from "lottie-react";
import GlassForm from '../GlassForm';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='mainclass'>

    <div className='Home1'> Welcome to <span className='gred'>Lunar-pot</span></div>
    
    <div className='gred21'>Diabetes Evaluation and Expert Prognosis</div>
    <Link to={'/vacc'} ><button className='b165'>Try Deep-AI</button></Link>
    

    
      <div>
      <Lottie animationData={gemini}/>  
      </div>
   



    </div>
  )
}

export default Home; 