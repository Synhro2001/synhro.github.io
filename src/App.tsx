import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMePage from './pages/AboutMe';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import ContactMePage from './pages/ContactMe';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <div className="navbar-container">
          <Navbar/>
        </div>
        <div className="app-content">
          <section id="home">
            <HomePage/>
          </section>
          <section id="about-me">
            <AboutMePage/>
          </section>
          <section id="skills">
            <SkillsPage/>
          </section>
          <section id="contact-me" className="contact-me-background">
          <ContactMePage/>
          </section>
        </div>
       
      </Router>
    </div>
  );
};

export default App;
