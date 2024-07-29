import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Mind from './NewMind.json'
import Lottie from "lottie-react";



const NavigationBar = () => {
  return (
    <Navbar expand="lg" style={{ border: 'none', height:80  }}className='navclass'>
           <Navbar.Brand  className='logo'>
           <Lottie animationData={Mind} style={{marginTop:20}}/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link as={Link} to="/"style={{color:'#FFD700' , fontSize:23 , marginRight:30}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{color:'#FFD700',fontSize:23,marginRight:30}}>About</Nav.Link>
         
          <Nav.Link as={Link} to="/ourteam" style={{color:'#FFD700',fontSize:23,marginRight:45}}>Team</Nav.Link>
          <Nav.Link as={Link} to={'/VAcc'} style={{color:'#FFD700',fontSize:23}} className='b166'>TryMind</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
