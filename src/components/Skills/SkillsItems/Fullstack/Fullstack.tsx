import React, { useState } from 'react';
import Button from '../../../Button/Button';
import './Fullstack.css';
import { renderUdemyCourses, renderLinkedInCourses, renderCompletedTestTasks } from './renderCourses';

type Section = 'udemy' | 'linkedin' | 'testTasks' | null;

const Fullstack: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState<Section>(null);

  const toggleSection = (section: Section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const renderButtons = () => (
    <>
      <Button label="Udemy Courses" onClick={() => toggleSection('udemy')} className="list-button" />
      <Button label="LinkedIn Courses" onClick={() => toggleSection('linkedin')} className="list-button" />
      <Button label="Completed test tasks" onClick={() => toggleSection('testTasks')} className="list-button" />
    </>
  );

  const renderContent = () => {
    switch (visibleSection) {
      case 'udemy':
        return (
          <ul className="nested-list">
            {renderUdemyCourses()}
            <Button label="Back" onClick={() => toggleSection('udemy')} className="list-button" />
          </ul>
        );
      case 'linkedin':
        return (
          <ul className="nested-list">
            {renderLinkedInCourses()}
            <Button label="Back" onClick={() => toggleSection('linkedin')} className="list-button" />
          </ul>
        );
      case 'testTasks':
        return (
          <ul className="nested-list">
            {renderCompletedTestTasks()}
            <Button label="Back" onClick={() => toggleSection('testTasks')} className="list-button" />
          </ul>
        );
      default:
        return renderButtons();
    }
  };

  return (
    <div>
      <ul className="dashed-list">
        {renderContent()}
      </ul>
    </div>
  );
};

export default Fullstack;
