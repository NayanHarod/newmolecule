import React from "react";
import "./style.css";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

var gbl;
const GlassForm = () => {
  const navigate = useNavigate();

  const [hb1, setHb1] = useState();
  const [bgl, setBgl] = useState();
  const [age, setAge] = useState();
  const [bmi, setBmi] = useState();
  
  const [result, setResult] = useState('');

  const dataToSend = {
    Hb1Ac_level: hb1,
    blood_glucose_level: bgl,
    age: age,
    bmi: bmi,
    result: gbl
  };

  const FormValue = {
    Hb1Ac_level: hb1,
    blood_glucose_level: bgl,
    age: age,
    bmi: bmi,
  };
  console.log(FormValue);


  const handleSubmit = async() => {
    console.log("Hello");

    const db =  await fetch("http://localhost:8000/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(FormValue),
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        return data;     
      });
      
      dataToSend.result = db;
      navigate('/res', { state: { data: dataToSend } });
  };
  

  return (
    <div>
      <form className="form">
        <h1>Deep-AI</h1>

        <input
        type="number"
         required
          value={hb1}
          className="box"
          placeholder="Enter HbA1c Value"
          onChange={(e) => {
            setHb1(e.target.value);
          }}
        ></input>

        <input
        type="number"
          required
          value={bgl}
          placeholder="Blood_Glucoss_Level"
          onChange={(e) => {
            setBgl(e.target.value);
          }}
          className="box"
        />
        <input
         required
        type="number"
          value={age}
          placeholder="Enter The Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          className="box"
        />
        <input
        required
        type="number"
          className="box"
          placeholder="Enter The BMI"
          
          value={bmi}
          onChange={(e) => {
            setBmi(e.target.value);
          }}
        />
        <button type="button" id="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GlassForm;
