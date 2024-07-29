import React from 'react';
import './App.css';
import Home from './Component/Home';
import Second_page from './Component/page2';
import Report_gen from './Component/page3';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
