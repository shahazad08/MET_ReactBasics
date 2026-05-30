import logo from './assets/img/Met_image.png';
import React, { useState } from 'react';
import './App.css';

function App() {
  // useState hook replaces constructor + this.state
  const url = 'https://www.met.edu/';
  const [title] = useState('Hello from MET, and Welcome');

   // onClick handler
  const onClick = (event) => {
    console.log("save button is clicked!", event);
    window.open(url, "_blank");
  };


  return (
    <div className="App">
      <h1>{title}</h1>
      <img src={logo}
       onClick={onClick}
        alt="MET Logo"/>
    </div>
  );
}

export default App;
