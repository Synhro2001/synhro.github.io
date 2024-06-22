import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <div className="navbar-container">
          <Navbar/>
        </div>
        <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </div>
      </Router>

    </div>
   
  );
};

export default App;
