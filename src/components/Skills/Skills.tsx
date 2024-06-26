import React from 'react'
import useTypewriter from '../../hooks/useTypewriter';
import Card from '../Card/Card';

import "./Skills.css"
import Fullstack from './SkillsItems/Fullstack/Fullstack';
import WebDesign from './SkillsItems/WebDesign/WebDesign';
import VideoCreator from './SkillsItems/ComingSoon/VideoCreator';

function Skills() {

  const skillsMessages = ["Explore my portfolio of programming knowledge", "Download my design templates" ]
  const text = useTypewriter(skillsMessages, 150);
  const cardBackground = {
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
  };

  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <h1>It's my Skills</h1>
        <div className="skills-typewriter-wrapper">
          <span>{text}</span>
        </div>
        <div className="skills-card-container">
          <Card
            title='Fullstack developer'
            description='React, Typescript, Javascript, C#, Next.js, SQL, MongoDB'
            size='medium'
            background={cardBackground}
            content={<Fullstack/>}

          />
            <Card
            title='Web design and not much game design '
            description='Figma, Aseprite'
            size='medium'
            background={cardBackground}
            content={<WebDesign/>}
      
          />
            <Card
            title='Video creator'
            description='ClipChamp, Blender'
            size='medium'
            background={cardBackground}
            content={<VideoCreator/>}
          />

        </div>
      </div>
    </div>
  )
}

export default Skills