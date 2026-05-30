
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import OtherPage from './components/About Us';


function App() {
 return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/other">About US</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
