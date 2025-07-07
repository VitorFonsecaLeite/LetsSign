import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../pages/Login';
import Authenticator from '../../components/Authenticator';

const publicRoutes = [
  <Route key="login" path="/login"
    element={
      <Authenticator>
        <Login />
      </Authenticator>
    } />,
];

export default publicRoutes;
