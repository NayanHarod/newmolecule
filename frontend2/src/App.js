import logo from './logo.svg';
import React from 'react';
import './App.css';
import Response from './Component/Response';

import Home from './Component/Home';
import Second_page from './Component/page2';
import Report_gen from './Component/page3';

// import {FormData} from './Component/FormData';
import GlassForm from './GlassForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ChatBot from './Component/ChatBot';
import VoiceAssistant from './Component/voiceAss';

function App() {
  return (
    <div className="App">
      {/* <FormData/>
       */}

       <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>

        <Route path='/vAcc' element = {<Second_page/>}/>
     
        <Route path='/res' element={<Report_gen/>}/>
    
     
      </Routes>
      </BrowserRouter> 
      
     
    </div>
  );
}

export default App;
