import React, { useState } from 'react';
import '../App.css';
import logo from '../assets/img/Met_image.png';

function OtherPage() {
  const url = 'https://www.met.edu/';
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState('');

  const onClick = () => window.open(url, "_blank");

  const onNameChange = (event) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    setUserName(event.target.value);
    setNameError(nameRegex.test(event.target.value) ? '' : 'Name is Incorrect');
  };

  return (
    <div>
      <h1>Hello {userName} from MET</h1>
      <img src={logo} onClick={onClick} alt="MET logo" />
      <div>
        <input placeholder="Enter your name" onChange={onNameChange} value={userName} />
        <span className="error-output">{nameError}</span>
      </div>
      <div className="info-section">
        <p>
        Established in 1989, with a mission to redefine the system of education, Mumbai Educational Trust (MET) is a professionally managed, multi-disciplinary and multi-faceted oasis of knowledge. Its premiere educational institutes conduct university accredited and autonomous courses. 
        The grant of the ISO 9001:2015 certification is an acknowledgement of the institution's capability to deliver professional education that meets the highest standards of professionalism worldwide. All this, to help young professionals face the challenges of life. And make their mark in the corporate world.
          <br /><br />
          To learn more, visit <a href="https://www.met.edu/" target="_blank" rel="noopener noreferrer">MET</a> —  
          our mission is <strong>Employability to all</strong>.
        </p>
      </div>
    </div>
  );
}

export default OtherPage;
