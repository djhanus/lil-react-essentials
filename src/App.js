import React, { useState, useEffect } from 'react';
import './App.css';

function App() {  
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>Current state of emotions: {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate!
      </button>
      <button onClick={() => setSecondary("ridiculous")}>
        Ridiculate!
      </button>
      <button onClick={() => setEmotion("slappy")}>
        Slappillate!
      </button>
    </>
  );
}

export default App;