import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import MainRoutes from './routes';
import GlobalStyle from './style/GlobalStyle';
import { light, dark } from './style/themes';

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRoutes toggleTheme={toggleTheme} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
