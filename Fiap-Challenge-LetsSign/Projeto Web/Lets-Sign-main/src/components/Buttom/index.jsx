import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CustomButton = ({ width, height, color, text, onClick, hoverColor, rounded, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    width: width,
    height: height,
    backgroundColor: isHovered ? hoverColor : color,
    borderColor: isHovered ? hoverColor : color,
    color: textColor,
    borderRadius: rounded ? '50px' : '0', // Rounded if true, square if false
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  };

  return (
    <Button
      onClick={onClick}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  hoverColor: PropTypes.string,
  rounded: PropTypes.bool,
  textColor: PropTypes.string,
};

export default CustomButton;
