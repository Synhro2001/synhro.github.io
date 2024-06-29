import React, { useState } from 'react';
import Button from '../../../Button/Button';

const WebDesign: React.FC = () => {
  const [showFigmaTemplates, setShowFigmaTemplates] = useState<boolean>(false);

  const toggleFigmaTemplates = () => {
    setShowFigmaTemplates(!showFigmaTemplates);
  };

  const onDownloadButtonClick = (pdfUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderFigmaTemplates = () => (
    <>
      <li>
        <Button
          label="E-commerce website"
          onClick={() => onDownloadButtonClick('https://raw.githubusercontent.com/username/repository/branch/path/to/E-commerce.pdf', 'E-commerce.pdf')}
          className="list-link"
        />
      </li>
      <li>
        <Button
          label="Minimalism template"
          onClick={() => onDownloadButtonClick('https://raw.githubusercontent.com/username/repository/branch/path/to/Minimalism.pdf', 'Minimalism.pdf')}
          className="list-link"
        />
      </li>
      <li>
        <Button
          label="Minimalism phone template"
          onClick={() => onDownloadButtonClick('https://raw.githubusercontent.com/username/repository/branch/path/to/MinimalismPhone.pdf', 'MinimalismPhone.pdf')}
          className="list-link"
        />
      </li>
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
