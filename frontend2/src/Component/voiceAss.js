import React, { useState, useEffect } from 'react';
import './VoiceAssistant.css'; // Import CSS for styling (create this file if it doesn't exist)
import Lottie from "lottie-react";
import anim from '../Animation - 1713432995212.json'
import gemini from './gemin.json'
import robo from './RB1.json'
// import aiass from './your_file.json'

const VoiceAssistant = () => {
  const [transcript, setTranscript] = useState('');
  const [commandInput, setCommandInput] = useState(''); // State to store the command input
  const [voices, setVoices] = useState([]); // State to store available voices
  const [recognition, setRecognition] = useState(null); // State to store the recognition object
  const [listening, setListening] = useState(false); 
  const [isClicked, setIsClicked] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText =  `LunarPot is a visionary project revolutionizing drug discovery. 
  Leveraging cutting-edge technology and interdisciplinary expertise, LunarPot aims to expedite the development of innovative therapeutics.
  In the vast expanse of space, the moon has long captivated humanitys imagination with its mysteries and potential. Inspired by this 
  celestial body`
  const words = fullText.split(' ');
  const delay = 100; // milliseconds

  useEffect(() => {
    // Initialize recognition object when component mounts
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US'; // Set recognition language to English (United States)
    recognition.interimResults = false; // Set to true if you want interim results while speaking
    recognition.maxAlternatives = 1; // Maximum number of recognition alternatives to consider
    recognition.onresult = handleSpeechResult;
    setRecognition(recognition);

    // Fetch available voices when component mounts
    const speechSynthesis = window.speechSynthesis;
    const voices = speechSynthesis.getVoices();
    setVoices(voices);

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < words.length) {
        setDisplayText(prevText => prevText + words[currentIndex] + ' ');
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, []);

  const handleSpeechResult = (event) => {
    const last = event.results.length - 1;
    const text = event.results[last][0].transcript;
    setTranscript(text);
    // Call function to handle the recognized text
    handleVoiceCommand(text);
  };

  const startListening = () => {
    // Check if recognition object exists before starting
    if (recognition) {
      recognition.start();
      setListening(true); // Set listening state to true
    }
  };

  const stopListening = () => {
    // Stop recognition
    if (recognition) {
      recognition.stop();
      setListening(false); // Set listening state to false
    }
  };

  const handleVoiceCommand = (command) => {
    // Implement logic to handle different commands
    let response = '';
  
    if (command.toLowerCase().includes('hello')) {
      response = 'Hello  my name is sufra ! How can I assist you?';
    } else if (command.toLowerCase().includes('Hii supra')) {
      response = `Sure Provide Your Id `;

      // You can add logic here to actually navigate to the main form page if needed
    }
  
    // Use speech synthesis to respond audibly  
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(response);

    // Find Indian English voice if available
    const indianEnglishVoice = voices.find(voice => voice.lang === 'en-IN');
    if (indianEnglishVoice) {
      utterance.voice = indianEnglishVoice;
    } else {
      // If Indian English voice is not available, use default voice
      utterance.lang = 'en-US'; // Default to English (United States)
    }

    speechSynthesis.speak(utterance);
  };

  const handleInputChange = (event) => {
    setCommandInput(event.target.value);
  };

  const handleCommandSubmit = () => {
    // Call function to handle the command input
    handleVoiceCommand(commandInput);
  };
  
  return (
    <div className="voice-assistant">

        <div className='micp'>
    
      {/* <span className='gred'>AI assistant  </span> */}
      {/* <button className={`microphone ${listening ? 'listening' : ''}`} onClick={listening ? stopListening : startListening}><div><Lottie animationData={robo}/> </div></button> */}

      {/* <Lottie animationData={aiass}/> */}
    <div className='Nayan'>
    <div className='box' >
      <h2 className='h2'>Voice Assistance :-</h2>
      <br/>
      



      <h5>{displayText}</h5>
    </div>
    <div className='btn'>
      <button
    className={`microphone ${listening ? 'listening' : ''} ${isClicked ? 'clicked' : ''}`}
    onClick={() => {
        if (listening) {
            stopListening();
        } else {
            startListening();
        }
        setIsClicked(!isClicked);
    }}
>
    <div><Lottie animationData={robo} /></div>
    
</button> 
</div>

        </div> 
     
      
      </div>

<div className='llt'>
<Lottie animationData={gemini}/>  
</div>
       
        

    </div>
  );
};

export default VoiceAssistant;
