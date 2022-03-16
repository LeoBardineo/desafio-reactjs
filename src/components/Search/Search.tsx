import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {
  SearchContainer,
  SearchButton,
  ButtonContainer,
  SearchInput,
} from './style';

interface Props {
  placeholder?: string;
}

const Search: React.FC<Props> = ({ placeholder }): JSX.Element => {
  const [username, setUsername] = useState('');
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') navigate(`profile/${username}`, { replace: true });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        name="username"
        id="username"
        className="search-input"
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyPress={handleOnEnter}
        value={username}
      />
      <Link to={`profile/${username}`}>
        <SearchButton type="submit">
          <ButtonContainer>
            <FiSearch fill={theme.primary} size="30px" />
            Search
          </ButtonContainer>
        </SearchButton>
      </Link>
    </SearchContainer>
  );
};

Search.defaultProps = {
  placeholder: 'Type the username here...',
};

export default Search;
