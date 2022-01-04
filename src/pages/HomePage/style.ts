import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  font-family: Lato;
  font-style: italic;

  h1 {
    color: ${(props) => props.theme.primary};
    font-weight: 300;
  }
`;
