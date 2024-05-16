import React from 'react'
import './Home.css'
import gemini from './gemin.json'
import Lottie from "lottie-react";
import GlassForm from '../GlassForm';
import { Link } from 'react-router-dom';
import Mind from './MMind.json'

const Home = () => {
  return (
    <div className='mainclass'>
<div className='Home123'>
<Lottie animationData={Mind}/> 
</div>

    <div className='Home1'> Welcome to <span className='gred'>Molecule-Mind</span></div>

    <div className='gred21'>Connecting AI to Cure...</div>
    <Link to={'/VAcc'} ><button className='b165'>Continue...</button></Link>
    

    
      <div className='anm'>
      <Lottie animationData={gemini}/>  
      </div>  
   



    </div>
  )
}

export default Home; 