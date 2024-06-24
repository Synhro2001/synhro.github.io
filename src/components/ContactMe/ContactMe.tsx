import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-me-container">
        <div className="contact-me-text-content">
          <p className="contact-me-title">Contact me</p>
          <div className="contact-me-line"></div>
          <div className="contact-me-info">
            <p className="contact-me-detail">Phone: (+371) 20246328 (Mobile)</p>
            <p className="contact-me-detail">Website: <a href="https://github.com/Synhro2001" target="_blank" rel="noopener noreferrer">https://github.com/Synhro2001</a></p>
            <p className="contact-me-detail">Email: <a href="mailto:vadims.krasovskij01@gmail.com">vadims.krasovskij01@gmail.com</a></p>
            <p className="contact-me-detail">LinkedIn: <a href="https://www.linkedin.com/in/vadim-krasovskis-59091724b" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/vadim-krasovskis-59091724b</a></p>
          </div>
        </div>
        <div className="contact-me-textarea-container">
          <textarea className="contact-me-textarea" placeholder="Write your message..."></textarea>
        </div>
    </div>
  );
}

export default ContactMe;
