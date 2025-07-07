import React from 'react';
import './style.css';
import LoginForm from './LoginForm';

const LoginFormSection = () => {
  return (
    <div className="login-form-section">
      <img className="img-logo" src="/src/assets/labels/logowithtext.png" alt="Logo With Text" />
      <div className="form-content">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginFormSection;
