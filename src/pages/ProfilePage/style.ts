import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Developer = styled.div`
  display: flex;
  width: 30%;
  height: 100vh;
  padding: 50px 25px;
  background-color: ${(props) => props.theme.secondary};
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Picture = styled.img`
  width: 300px;
  max-width: 100%;
  display: block;
  margin: 0 auto 25px;
`;

export const Name = styled.h1`
  font-size: 2.5em;
  font-style: italic;
  font-weight: 300;
  font-family: Lato;
  color: ${(props) => props.theme.text};
  @media (max-width: 1400px) and (min-width: 1100px) {
    font-size: 2em;
  }
`;

export const User = styled.p`
  font-size: 1.75em;
  font-style: italic;
  font-weight: 300;
  font-family: Lato;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
  @media (max-width: 1400px) and (min-width: 1100px) {
    font-size: 1.2em;
  }
`;

export const Bio = styled.p`
  font-size: 1.1em;
  font-family: Lato;
  color: ${(props) => props.theme.subtext};
  margin-bottom: 20px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25em;
  color: ${(props) => props.theme.text};
  margin-bottom: 40px;
  width: 100%;
  @media (max-width: 1800px) and (min-width: 1100px) {
    div {
      flex: 1;
      overflow: hidden;
    }

    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 1.56em;
  color: ${(props) => props.theme.text};
  margin-bottom: 25px;
  @media (max-width: 1400px) and (min-width: 1100px) {
    font-size: 1.25em;
  }
`;

export const Info = styled.div`
  font-style: italic;
  font-weight: 300;
  font-family: Lato;

  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 5px;
`;

export const InfoText = styled.span``;
export const Divider = styled.div``;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 200px;
  padding: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.background};

  text-decoration: none;
  text-align: center;
  font-style: italic;
  font-weight: 300;
  font-size: 1.1em;
  font-family: Lato;
  color: ${(props) => props.theme.secondary};
`;

export const ViewRepo = styled.a`
  display: none;
  font-style: italic;
  font-weight: 300;
  font-size: 1.1em;
  font-family: Lato;
  text-align: center;
  color: ${(props) => props.theme.text};
  margin: 10px 0;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: block;
  }
`;

export const Repositories = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  padding: 30px 50px;
  @media (min-width: 1100px) {
    overflow-y: scroll;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`;

export const Repository = styled.div`
  font-style: italic;
  font-family: Lato;
  margin-top: 30px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.secondary};
  span {
    font-size: 20px;
  }
`;
export const RepoName = styled.a`
  font-weight: 300;
  font-size: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
`;
export const RepoDescription = styled.h2`
  font-weight: 300;
  font-size: 18px;
`;
export const RepoStars = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Dot = styled.span``;
export const RepoUpdated = styled.p`
  font-size: 20px;
`;

export const RepoStats = styled.div`
  display: flex;
  gap: 10px;
  color: ${(props) => props.theme.subtext};
`;

export const LinkSite = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
