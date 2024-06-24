import React from 'react';

import './Home.css'
import useTypewriter from '../../hooks/useTypewriter';

const Home = () => {
  const style = {
    background: 'rgb(2, 0, 36, 0.3)',
  };

  const messages = ["My name is Vadim.", "I'm a frontend developer."];
  const description = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
  const text = useTypewriter(messages, 150);

  return (
    <div className="home-container">
        <div className="home-wrapper">
          <div className="home-content-left">
              <p className="home-title">Welcome !</p>
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
