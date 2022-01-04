import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import {
  SearchContainer,
  SearchButton,
  ButtonContaienr,
  SearchInput,
} from './style';

const Search = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const theme = useContext(ThemeContext);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        name="username"
        id="username"
        className="search-input"
        placeholder="Type the username here..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <SearchButton type="submit">
        <ButtonContaienr>
          <FiSearch fill={theme.primary} size="30px" />
          Buscar
        </ButtonContaienr>
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
