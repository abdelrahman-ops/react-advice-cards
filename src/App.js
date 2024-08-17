import React, { useState } from 'react';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);

  const messages = [
    "Take it one step at a time.",
    "Believe in yourself.",
    "Never give up."
  ];

  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  }

  function previous() {
    setIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
  }

  return (
    <div className="App">
      <div class="container">
        <h1>Card <span>{index+1}</span></h1>
        <h1>{messages[index]}</h1>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default App;
