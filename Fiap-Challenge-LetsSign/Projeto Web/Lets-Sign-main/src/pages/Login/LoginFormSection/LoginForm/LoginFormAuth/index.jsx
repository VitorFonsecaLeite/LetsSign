import React, { useState } from 'react';
import TwoFactorInput from './TwoFactorInput';
import { auth2fMock } from '../../../../../services/auth';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function LoginFormAuth() {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill(''));

  const handleOAuthSubmit = (event) => {
    event.preventDefault();
    const codeNumber = parseInt(code.join(''), 10);
    const response = auth2fMock(codeNumber);
    if (response.success) {
      navigate('/');
    } else {
      alert(response.message);
    }
  };

  const handleChangeTwoFactor = (e, index, inputsRef) => {
    const value = e.target.value;

    if (/^\d$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== '' && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  return (
    <form className="login-form" onSubmit={handleOAuthSubmit}>
      <div className="form-group-button">
        <h3>Digite o código de validação</h3>
        <p>Insira o código de seis dígitos gerado pelo seu app de autenticação de dois fatores</p>
      </div>
      <TwoFactorInput handleChangeTwoFactor={handleChangeTwoFactor} />
      <div className="form-group-button">
        <button type="submit" className="login-button">
          Validar
        </button>
      </div>
    </form>
  );
}
