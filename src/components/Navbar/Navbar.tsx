import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content animation-line">
        <a onClick={() => handleScroll('home')}>Home</a>
        <a onClick={() => handleScroll('about-me')}>About Us</a>
        <a onClick={() => handleScroll('skills')}>Skills</a>
        <a onClick={() => handleScroll('contact-me')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
