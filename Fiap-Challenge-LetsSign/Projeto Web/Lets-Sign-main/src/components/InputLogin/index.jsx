import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

export default function InputLogin({ label, htmlFor, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={htmlFor} id={htmlFor} placeholder={placeholder} />
    </div>
  );
}

InputLogin.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
