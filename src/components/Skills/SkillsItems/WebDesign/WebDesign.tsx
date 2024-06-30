import React, { useState } from 'react';
import Button from '../../../Button/Button';

import e_commerce_design from './pdf/E-commerce.pdf'
import minimalism_design from './pdf/Minimalism.pdf'
import minimalism_phone_design from './pdf/MinimalismPhone.pdf'


const WebDesign: React.FC = () => {
  const [showFigmaTemplates, setShowFigmaTemplates] = useState<boolean>(false);

  const toggleFigmaTemplates = () => {
    setShowFigmaTemplates(!showFigmaTemplates);
  };

  const renderFigmaTemplates = () => (
    <>
      <li><a href={e_commerce_design} download className="list-link">E-commerce website</a></li>
      <li><a href={minimalism_design} download className="list-link">Minimalism template</a></li>
      <li><a href={minimalism_phone_design} download className="list-link">Minimalism phone template</a></li>
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
