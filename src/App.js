
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import OtherPage from './components/About Us';


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </Router>
>>>>>>> UC8_react_router
  );
}

export default App;
