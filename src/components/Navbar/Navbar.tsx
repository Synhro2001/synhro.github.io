import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" onClick={() => handleScroll('home')}>Home</Link>
        <Link to="/about-us" onClick={() => handleScroll('aboutus')}>About Us</Link>
        <Link to="/contact" onClick={() => handleScroll('contact')}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

