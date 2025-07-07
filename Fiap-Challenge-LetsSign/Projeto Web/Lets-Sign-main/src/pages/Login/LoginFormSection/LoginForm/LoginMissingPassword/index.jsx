import React from 'react';
import PropTypes from 'prop-types';
import InputLogin from '../../../../../components/InputLogin';
import './style.css';

export default function LoginMissingPassword({ handleMissingPassword }) {
  return (
    <form className="login-form" onSubmit={handleMissingPassword}>
      <div className="form-group-button">
        <h3>Esqueci minha senha !</h3>
        <p>Insira seu e-mail a baixo, que enviaremos um link para troca de senha.</p>
      </div>
      <InputLogin label="Email" htmlFor="email" placeholder="Digite seu email" type="email" />
      <div className="form-group-button">
        <button type="submit" className="login-button">
          ENVIAR
        </button>
      </div>
    </form>
  );
}

LoginMissingPassword.propTypes = {
  handleMissingPassword: PropTypes.func.isRequired,
};
