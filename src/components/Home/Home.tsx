import React from 'react';

import './Home.css'
import useTypewriter from '../../hooks/useTypewriter';

const Home = () => {

  const messages = ["My name is Vadim.", "I'm a fullstack developer."];
  const description = `I'm , a junior Fullstack Developer with extensive experience in frontend development.
   Each project is an opportunity to help you bring your ideas to life.
  I focus on code quality, user experience, and flexibility to ensure that your products are not only functional but also user-friendly.
  This portfolio will introduce you to my work and provide the necessary information for us to collaborate effectively`
  const text = useTypewriter(messages, 150);

  return (
    <div className="home-container">
        <div className="home-wrapper">
          <div className="home-content-left">
              <h1>Welcome!</h1>
              <div className="home-typewriter-wrapper">
                <span>{text}</span>
              </div>
              <p className="home-description">{description}</p>
          </div>
        </div>
      
    </div>
  );
};

export default Home;
