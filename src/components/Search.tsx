import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = (): JSX.Element => {
  const [username, setUsername] = useState('');

  return (
    <div className="search-container">
      <input
        type="text"
        name=""
        id=""
        className="search-input"
        placeholder="Type the username here..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <button className="search-button" type="submit">
        <div className="button-container">
          <FiSearch color="ECEFF4" size="30px" />
          Buscar
        </div>
      </button>
    </div>
  );
};

export default Search;
