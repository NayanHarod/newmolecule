import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from "./Loader";

import { useLocation } from 'react-router-dom';


const ChatBot = () => {

  const location = useLocation();
  const receivedData = location.state?.data || {};
  console.log(receivedData, 'botttttt');
  const ChatBubble = ({ content, role }) => {
    return (
      <div className={`chat-bubble ${role === "assistant" ? "user-bubble" : "bot-bubble"}`}>
        {content}
      </div>
    );
  };
  const [input, setInput] = useState();
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const  message  = {"message":"message"}
  const navigate = useNavigate()

  function handleEnter() {

    setIsLoading(true);
    const message = input;
    const js = { message: message, receivedData: receivedData };
    console.log(input, 'mmmmmmmmmmmmmmmmmmm')


    console.log(Object.keys(js));
    // console.log((js.keys));
    console.log(js);

    fetch("http://localhost:3005/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },

      body: JSON.stringify(js)

    })
      .then((response) => response.json())
      .then((data) => {
        console.log('JJJJJJJJJJJJJJJJJJJJJJ', data);
        const newMessage = { role: "assistant", content: input };


        const botResponse = { role: "bot", content: data.content };

        setResult((prevMessages) => [...prevMessages, botResponse]);
        setInput('')
        console.log(result);
      })

      // Process the response data
      // console.log(data);

      .catch((error) => {
        console.error("Error:", error);
      }).finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="container1">

      <div
        className="box5"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",

        }}
      >
        {isLoading ? (<Loader />) : (

          // <ChatBubble content={result}  />
          result.map((message, index) => (
            <ChatBubble key={index} content={message.content} type={message.role} />
          ))

        )}


      </div>

      <input
        className="box4"

        type="text"
        value={input}
        placeholder="Enter Your Details"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div className="H11">
        <button type="submit" id="submit22" onClick={handleEnter}>

          Enter
        </button>

      </div>
    </div>
  );
};

export default ChatBot;



// import React from 'react';

// function Response() {
//   return (
//     <div style={containerStyle}>
//       {/* Your existing content goes here */}

//       {/* Input bar for chat */}
//       <div style={inputContainerStyle}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           style={inputStyle}
//         />
//         <button style={buttonStyle}>Ask</button>
//       </div>
//     </div>
//   );
// }

// // CSS styles
// const containerStyle = {
//   position: 'relative',
//   minHeight: '100vh',
// };

// const inputContainerStyle = {
//   position: 'fixed',
//   bottom: '20px', // Adjust this for vertical position
//   left: '50%',
//   transform: 'translateX(-50%)',
//   width: '1800px',
//    // Adjust this for width
//   backgroundColor: 'black',
//   // borderTop: '1px solid #ccc',
//   padding: '10px',
//   display: 'flex',
//   alignItems: 'center',
// };

// const inputStyle = {
//   width: 'calc(100% - 70px)', // Subtracting padding and button width
//   height: '60px',
//   borderRadius: '20px',
//   padding: '0 15px',
//   fontSize: '21px',
  
//   border: '1px solid #ccc',
// };

// const buttonStyle = {
//   width: '90px',
//   height: '60px',
//   marginLeft: '10px',
//   borderRadius: '20px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   border: 'none',
//   cursor: 'pointer',
// };

// export default Response;
