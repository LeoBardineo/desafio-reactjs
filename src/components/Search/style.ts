import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  padding: 10px;
  border: none;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  cursor: pointer;
`;

export const ButtonContaienr = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 22px;
  font-style: italic;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-family: Lato;
  font-weight: 300;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 12px 20px;
  outline: none;
  font-family: Lato;
  font-style: italic;
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  transition: 0.25s ease-in-out border;
`;
