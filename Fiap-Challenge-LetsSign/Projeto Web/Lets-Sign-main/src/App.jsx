import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/Routes';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
