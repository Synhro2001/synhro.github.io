import React, { useState } from 'react';
import Button from '../../../Button/Button';
import './WebDesign.css';

const WebDesign = () => {
  const [showFigmaTemplates, setShowFigmaTemplates] = useState(false);

  const toggleFigmaTemplates = () => {
    setShowFigmaTemplates(!showFigmaTemplates);
  };

  const renderFigmaTemplates = () => (
    <>
      <li><a href="../../../../assets/pdf/E-commerce.pdf" download className="list-link">E-commerce website</a></li>
      <li><a href="../../../../assets/pdf/Minimalism.pdf" download className="list-link">Minimalism template</a></li>
      <li><a href="../../../../assets/pdf/MinimalismPhone.pdf" download className="list-link">Minimalism phone template</a></li>
    </>
  );

  return (
    <div>
      <ul className="animation-line">
        {!showFigmaTemplates && (
          <Button label="Figma Templates" onClick={toggleFigmaTemplates} className="list-button" />
        )}
        {showFigmaTemplates && (
          <ul className="nested-list">
            {renderFigmaTemplates()}
            <Button label="Back" onClick={toggleFigmaTemplates} className="list-button" />
          </ul>
        )}
      </ul>
    </div>
  );
};

export default WebDesign;
