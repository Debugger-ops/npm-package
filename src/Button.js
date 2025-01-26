import React from 'react';
import PropTypes from 'prop-types';

// Button component with default parameters
const Button = ({
  children,
  onClick,
  className = '', // Default value for className
  variant = 'primary', // Default value for variant
  size = 'medium', // Default value for size
}) => {
  const variants = {
    primary: {
      backgroundColor: '#3498db',
      hoverColor: '#2980b9',
      textColor: 'white',
    },
    secondary: {
      backgroundColor: '#2ecc71',
      hoverColor: '#27ae60',
      textColor: 'white',
    },
    danger: {
      backgroundColor: '#e74c3c',
      hoverColor: '#c0392b',
      textColor: 'white',
    },
  };

  const sizes = {
    small: {
      padding: '8px 12px',
      fontSize: '14px',
    },
    medium: {
      padding: '10px 16px',
      fontSize: '16px',
    },
    large: {
      padding: '12px 20px',
      fontSize: '18px',
    },
  };

  const buttonStyle = {
    ...sizes[size],
    backgroundColor: variants[variant].backgroundColor,
    color: variants[variant].textColor,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    outline: 'none',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={`custom-button ${className} ${variant}-button`}
    >
      {children}
    </button>
  );
};

// Prop types validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
  