import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.primary};
`;

export const SwitchBackground = styled.label`
  display: inline-block;
  font-size: 20px;
  height: 1em;
  width: 2em;
  background: ${(props) => props.theme.primary};
  border-radius: 1em;
  cursor: pointer;
`;

export const SwitchBolinha = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: ${(props) => props.theme.background};
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  transition: all 300ms;
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + div {
    transform: translate3d(100%, 0, 0);
  }
`;
