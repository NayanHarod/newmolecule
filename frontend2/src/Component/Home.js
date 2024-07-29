import React from 'react';
import './Home.css';
import gemini from './gemin.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import ParticlesComponent from './particals';

import NavigationBar from './Navbar'

function Home() {
  return (
    <>


      {/* <ParticlesComponent id = "particles" /> */}
      {/* <div className="Navbar">Hello</div> */}
      <div className='mainclass'>
        <ParticlesComponent id="particles" />
        <NavigationBar />
        {/* <div className='Home1'> Welcome</div> */}
        <div className='anm'>
          <Lottie animationData={gemini} style={{ height: 670 }} />

        </div>
        <div className='gred'>Molecule-Mind </div>
        <div className='contain_2'>
          <div className='newgrd'>Discover Drug With <div style={{ textAlign: 'left', marginLeft: 30, marginBottom: 20 }}> AI...</div> </div>
        </div>



        {/* <div className='gred21'>Connecting AI to Cure...</div> */}

        <Link to={'/VAcc'} ><button className='b165'>Connecting AI to Cure ---</button></Link>












      </div>
    </>
  )
}

export default Home; 