import React from 'react';
import Search from '../../components/Search/Search';
import Switch from '../../components/Switch/Switch';

import { Wrapper } from './style';

interface Props {
  toggleTheme(): void;
}

const HomePage: React.FC<Props> = ({ toggleTheme }): JSX.Element => (
  <Wrapper>
    <h1>Search Devs</h1>
    <Search />
    <Switch toggleTheme={toggleTheme} />
  </Wrapper>
);

export default HomePage;
