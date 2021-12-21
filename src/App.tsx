import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';

const App = (): React.ReactElement => (
  <Router>
    <MainRoutes />
  </Router>
);

export default App;
