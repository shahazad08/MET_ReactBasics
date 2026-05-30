import logo from './assets/img/Met_image.png';
import React, { useState } from 'react';
import './App.css';

function App() {
  // useState hook replaces constructor + this.state
  const url = 'https://www.met.edu/';
  const [userName, setUserName] = useState('');
  //const [title] = useState('Hello from MET, and Welcome');

   // onClick handler
  const onClick = (event) => {
    console.log("save button is clicked!", event);
    window.open(url, "_blank");
  };

   // onChange handler
  const onNameChange = (event) => {
    console.log("value is ", event.target.value);
    setUserName(event.target.value);
  };

  return (
    <div className="App">
     <h1>Hello {userName} from MET</h1>
      <img src={logo}
       onClick={onClick}
        alt="MET Logo"/>
        <div>
           <input onChange={onNameChange} />
        </div>
    </div>
  );
}

export default App;
