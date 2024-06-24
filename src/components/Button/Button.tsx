// components/Button/Button.tsx
import React from 'react';
import { IButton } from '../../types/IButton';
import './Button.css';

const Button: React.FC<IButton> = ({
  label,
  onClick,
  size = 'medium',
  className = '',
  style,
  disabled = false,
  type = 'button',
}) => {
  const buttonClasses = `button ${size} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={style}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
