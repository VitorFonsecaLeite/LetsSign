import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TwoFactorInput = ({ handleChangeTwoFactor }) => {
  const inputsRef = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="code-input-container">
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          className="code-input"
          onChange={(e) => handleChangeTwoFactor(e, i, inputsRef)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => (inputsRef.current[i] = el)}
        />
      ))}
    </div>
  );
};

TwoFactorInput.propTypes = {
  handleChangeTwoFactor: PropTypes.func.isRequired,
};

export default TwoFactorInput;
