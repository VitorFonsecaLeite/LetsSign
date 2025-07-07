import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LoginPageContainer = ({ children }) => {
  return <div className="login-page-container">{children}</div>;
};
LoginPageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginPageContainer;
