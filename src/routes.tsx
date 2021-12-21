import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const MainRoutes = (): React.ReactElement => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="profile" element={<ProfilePage />} />
  </Routes>
);

export default MainRoutes;
