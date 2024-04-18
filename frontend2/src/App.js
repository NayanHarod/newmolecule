import logo from './logo.svg';
import React from 'react';
import './App.css';
import Response from './Component/Response';

import Home from './Component/Home';

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
        <Route path='/vAcc' element = {<VoiceAssistant/>}/>
        {/* <Route path='/form' element = {<GlassForm />}/>
        <Route path='/res' element={<Response/>}/>
        <Route path='/bot' element={<ChatBot/>}/> */}
     
      </Routes>
      </BrowserRouter> 
      
     
    </div>
  );
}

export default App;
