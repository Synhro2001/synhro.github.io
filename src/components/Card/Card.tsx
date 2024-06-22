import React from 'react'
import './Card.css'
import ICardProps from '../../types/ICard';

const Card: React.FC<ICardProps> = ({ title, description, size, className, background}) => {
   
    const cardClasses = `card ${size} ${className}`;

    return (
        <div className={cardClasses} style={background}>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
    );
}

export default Card