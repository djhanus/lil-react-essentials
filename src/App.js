import React, { useState } from 'react';
import './App.css';

function App() {  
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion)
  return (
    <>
      <h1>Current state of emotions: {emotion}.</h1>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate!
      </button>
      <button onClick={() => setEmotion("exhuberant")}>
        Exhuberate!!
      </button>
    </>
  );
}

export default App;