import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

interface Props {
  toggleTheme(): void;
}

const MainRoutes: React.FC<Props> = ({ toggleTheme }): React.ReactElement => (
  <Routes>
    <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
    <Route path="profile" element={<ProfilePage toggleTheme={toggleTheme} />} />
  </Routes>
);

export default MainRoutes;
