import React from 'react';

interface Props {
  toggleTheme(): void;
}

const ProfilePage: React.FC<Props> = ({ toggleTheme }): JSX.Element => (
  <div>
    <h1>Profiles 🧐</h1>
    <button type="button" onChange={toggleTheme}>
      bom dia
    </button>
  </div>
);

export default ProfilePage;
