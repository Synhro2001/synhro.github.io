import React from 'react'
import './AboutMe.css'
import myPhoto from '../../assets/myPhoto.jpg'

const AboutMe = () => {

  const description = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'

  return (
    <div className="about-me-container">
        <div className="about-me-wrapper"> 
          <div className="about-me-img-content">
            <img src={myPhoto} alt="About Me Image"/>
          </div>
          <div className="about-me-text-content"> 
            <p className="about-me-title">About me</p>
            <p className="about-me-description">{description}</p>
            <p className="about-me-contact">Contact me</p>
            <div className="about-me-line"></div>
            <div className="about-me-contact-container">
              <p className="telephone">Telephone: (123) 456-7890</p>
              <p className="web-info">Email: example@example.com</p>
              <p className="web-info">Website: www.example.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe 
