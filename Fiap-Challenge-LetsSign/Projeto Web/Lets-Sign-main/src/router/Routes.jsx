import React from 'react';
import { Routes } from 'react-router-dom';
import publicRoutes from './public';
import protectedRoutes from './protected';

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes}
      {protectedRoutes}
    </Routes>
  );
};

export default AppRoutes;
