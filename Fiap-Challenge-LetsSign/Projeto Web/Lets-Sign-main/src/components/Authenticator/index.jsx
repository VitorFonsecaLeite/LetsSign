import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

const Authenticator = ({ children, isProtected }) => {
  if (isProtected) {
    return isAuthenticated() ? children : <Navigate to="/login" replace />;
  }
  return !isAuthenticated() ? children : <Navigate to="/" replace />;
};
Authenticator.propTypes = {
  children: PropTypes.node.isRequired,
  isProtected: PropTypes.bool.isRequired,
};

export default Authenticator;
