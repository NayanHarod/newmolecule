import React from 'react'
import './response.css'
import { useLocation } from 'react-router-dom';
import { colors } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import Chart1 from './chart';




const Response = () => {
  const location = useLocation();
  const receivedData = location.state?.data || {};
  const navigate = useNavigate()
  {console.log(receivedData ,'3456765');}

  return (
    <div>
     
    <div className='container1'>
     
    
        {/* <div className='box1'style={{display:'flex',flexDirection:'row',flexWrap:'wrap', gap:'40px'}} > */}
        <div className='chart1'>
        <Chart1/>
        </div>
        
        {/* <Lottie animationData={chart}/>    */}
        {/* <div className='box2' style={{marginTop:-20 , marginLeft:'400px'}}>
          <h2 style={{marginTop:-40}}>Hb1Ac_level</h2>
          <h3 style={{marginTop:-10 ,fontSize:'20px' , marginLeft:'60px'}}>Value : {receivedData.Hb1Ac_level}</h3>
           
           </div>
           <div className='box2' style={{marginTop:-15,marginLeft:92}}>
           <h2 style={{marginTop:-40 , marginLeft:-10}}>Blood_Glucose</h2>
          <h3 style={{marginTop:-10 ,fontSize:'20px' , marginLeft:'60px'}}>Value : {receivedData.blood_glucose_level}</h3>
           </div>
<div className='box2' style={{marginTop:20 ,marginLeft:'200px', marginRight:'100px'}}>
           <h2 style={{marginTop:-40 , marginLeft:-10}}>AGE</h2>
          <h3 style={{marginTop:-10 ,fontSize:'20px' , marginLeft:'60px'}}>Value : {receivedData.age}</h3>
           </div>          
<div className='box2' style={{marginTop:20}}>
<h2 style={{marginTop:-40 , marginLeft:-10}}>BMI</h2>
          <h3 style={{marginTop:-10 ,fontSize:'20px' , marginLeft:'60px'}}>Value : {receivedData.bmi}</h3>
  </div> 

  <div className='box3' style={{marginTop:-50,marginLeft:200}}>
   
     <h2 style={{color:'white' , marginTop:-100}}>Result</h2>
     <h2 style={{marginTop:-20 , color:'white'}} >{receivedData.result}</h2>
    
  </div> 
           
        </div>
        <div>
           
        </div>
<div className='button-container'>
        <div><button className='btn11' onClick={()=>{
          navigate('/bot',{ state: { data: receivedData } })
        }}></button>

        </div> */}
       
        </div>
      
    {/* </div> */}
    </div>
  )
}

export default Response