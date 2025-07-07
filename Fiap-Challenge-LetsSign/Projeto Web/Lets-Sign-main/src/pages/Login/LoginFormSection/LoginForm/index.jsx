// src/components/LoginForm.jsx

import React, { useState } from 'react';
import InputLogin from '../../../../components/InputLogin';
import LoginSocialButtons from './LoginSocialButtons';
import LoginFormAuth from './LoginFormAuth';
import LoginMissingPassword from './LoginMissingPassword';
import { loginMock } from '../../../../services/auth';
import './style.css';

const LoginForm = () => {
  const [missingPassword, setMissingPassword] = useState(false);
  const [oAuth, setOAuth] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = loginMock({ email, password });
    if (response.success) {
      setOAuth(true);
    } else {
      alert(response.message);
    }
  };

  const handleMissingPassword = (event) => {
    event.preventDefault();
    setMissingPassword(!missingPassword);
  };

  return (
    <div className="login-form-container">
      {missingPassword ? (
        <LoginMissingPassword handleMissingPassword={handleMissingPassword} />
      ) : oAuth ? (
        <LoginFormAuth />
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <InputLogin label="Email" htmlFor="email" placeholder="Digite seu email" type="email" />
          <InputLogin label="Senha" htmlFor="password" placeholder="**********" type="password" />
          <div className="form-group-button">
            <button type="submit" className="login-button">
              LOGIN
            </button>
            <button type="button" className="forgot-password-button" onClick={handleMissingPassword}>
              Esqueci minha Senha
            </button>
          </div>
          <div className="divider">
            <span>ou</span>
          </div>
          <LoginSocialButtons />
        </form>
      )}
    </div>
  );
};

export default LoginForm;
