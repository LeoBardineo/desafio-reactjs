import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import {
  SwitchContainer,
  SwitchBackground,
  SwitchBolinha,
  SwitchInput,
} from './style';

interface Props {
  toggleTheme(): void;
}

const Switch: React.FC<Props> = ({ toggleTheme }): JSX.Element => (
  <SwitchContainer>
    <FaSun size="20px" />
    <SwitchBackground htmlFor="switch">
      <SwitchInput
        type="checkbox"
        name="switch"
        id="switch"
        onChange={toggleTheme}
        checked={useContext(ThemeContext).title === 'dark'}
      />
      <SwitchBolinha />
    </SwitchBackground>
    <FaMoon size="20px" />
  </SwitchContainer>
);

export default Switch;
