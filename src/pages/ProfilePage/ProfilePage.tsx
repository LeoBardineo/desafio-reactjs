import React, { useState } from 'react';
import {
  FiUsers,
  FiHeart,
  FiStar,
  FiMapPin,
  FiMail,
  FiLink,
  FiTwitter,
} from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';
import {
  ProfileWrapper,
  Developer,
  Repositories,
  Picture,
  Name,
  User,
  Bio,
  Stats,
  Info,
  InfoList,
  InfoText,
  Options,
  Button,
  ViewRepo,
  Repository,
  RepoName,
  RepoStars,
  RepoStats,
  RepoDescription,
  Dot,
  RepoUpdated,
} from './style';
import Switch from '../../components/Switch/Switch';
import Search from '../../components/Search/Search';

interface Props {
  toggleTheme(): void;
}

const ProfilePage: React.FC<Props> = ({ toggleTheme }): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const showRepositories = () => {
    setToggle(!toggle);
  };

  return (
    <ProfileWrapper>
      <Developer>
        <Picture src="https://i.redd.it/9lr7qti1whm61.jpg" />
        <Name>Developer&apos;s full name</Name>
        <User>@username</User>
        <Bio>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu,
          feugiat.
        </Bio>
        <Stats>
          <Info>
            <FiUsers />
            <InfoText>200 followers</InfoText>
          </Info>
          <Info>
            <FiHeart />
            <InfoText>130 following</InfoText>
          </Info>
          <Info>
            <FiStar />
            <InfoText>100 stars</InfoText>
          </Info>
        </Stats>
        <InfoList>
          <Info>
            <FaRegBuilding />
            Organization
          </Info>
          <Info>
            <FiMapPin />
            Location
          </Info>
          <Info>
            <FiMail />
            E-mail
          </Info>
          <Info>
            <FiLink />
            www.mywebsite.com
          </Info>
          <Info>
            <FiTwitter />
            @myTwitter
          </Info>
        </InfoList>
        <Button>Voltar</Button>
        <ViewRepo onClick={showRepositories}>View repositories</ViewRepo>
      </Developer>
      <Repositories>
        <Options>
          <Search placeholder="Type the repository name here..." />
          <Switch toggleTheme={toggleTheme} />
        </Options>
        <Repository>
          <RepoName>Repository Name</RepoName>
          <RepoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt congue ligula in rutrum. Morbi nec lacus condimentum,
            hendrerit mi eu, feugiat.
          </RepoDescription>
          <RepoStats>
            <RepoStars>
              <FiStar />
              <InfoText>100 stars</InfoText>
            </RepoStars>
            <Dot>&bull;</Dot>
            <RepoUpdated>Updated 30 days ago</RepoUpdated>
          </RepoStats>
        </Repository>
      </Repositories>
    </ProfileWrapper>
  );
};

export default ProfilePage;
