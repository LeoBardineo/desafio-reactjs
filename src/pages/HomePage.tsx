import React from 'react';
import Search from '../components/Search';

import '../styles/global.css';
import '../styles/HomePage.css';

const HomePage = (): JSX.Element => (
  <div className="wrapper">
    <h1>Search Devs</h1>
    <Search />
  </div>
);

export default HomePage;
