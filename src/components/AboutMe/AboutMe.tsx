import React from 'react'
import './AboutMe.css'
import myPhoto from './myPhoto.jpg'

const AboutMe = () => {

  const description = `
  I graduated with a Bachelor's Degree in Engineering Sciences in Information Technology and Computer Science from Riga Technical University. 
  Besides formal education, I continuously improve through professional courses. 
  As a communicative individual passionate about solving complex problems, 
  I excel in both frontend and backend development, thriving in dynamic environments driven by creativity and innovation.
`;


  return (
    <div className="about-me-container">
        <div className="about-me-wrapper"> 
          <div className="about-me-img-content">
            <img src={myPhoto} alt="About Me Image"/>
          </div>
          <div className="about-me-text-content"> 
            <h1>About me</h1>
            <p className="about-me-description">{description}</p>
            <p className="about-me-why-me">Why me ?</p>
            <div className="about-me-line"></div>
            <div className="about-me-why-me-container">
              <p>My academic knowledge and practical experience enable me to tackle challenges holistically, delivering efficient and innovative solutions.</p>
              <p>I am dedicated to delivering high-quality results, ensuring every project meets its objectives on time and within budget.</p>
              <p>I am passionate about continuous learning and achieving goals, always eager to embark on new achievements and expand my expertise.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe 
