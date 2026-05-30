import logo from './assets/img/Met_image.png';
import React, { useState } from 'react';
import './App.css';

function App() {
  // useState hook replaces constructor + this.state
  const [title] = useState('Hello from MET, and Welcome');
  return (
    <div className="App">
      <h1>{title}</h1>
      <img src={logo}
        alt="MET Logo"/>
    </div>
  );
}

export default App;
