import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  Divider,
  LinkSite,
} from './style';
import Switch from '../../components/Switch/Switch';

interface Props {
  toggleTheme(): void;
}

interface Dev {
  name?: string;
  bio?: string;
  avatar_url?: string;
  followers?: number;
  following?: number;
  starred?: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  twitter_username?: string;
}

interface Repo {
  id?: number;
  name?: string;
  description?: string;
  html_url?: string;
  stargazers_count: number;
  updated_at: string;
  pushed_at: string;
}

const ProfilePage: React.FC<Props> = ({ toggleTheme }): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const [dev, setDev] = useState<Dev>({});
  const [repositories, setRepositories] = useState<Repo[]>([
    {
      stargazers_count: 0,
      updated_at: '1970-12-01T00:00:00Z',
      pushed_at: '1970-12-01T00:00:00Z',
    },
  ]);
  const [stars, setStars] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    async function getDevInfo() {
      const devData = await fetch(`https://api.github.com/users/${id}`);
      const devJson = await devData.json();
      setDev(devJson);
    }

    getDevInfo();
  }, []);

  useEffect(() => {
    async function getRepo() {
      const repoData = await fetch(`https://api.github.com/users/${id}/repos`);
      const repoJson = await repoData.json();
      const repositoriesSorted = repoJson.sort((a: Repo, b: Repo) => {
        if (a.stargazers_count > b.stargazers_count) return -1;
        if (a.stargazers_count < b.stargazers_count) return 1;
        return 0;
      });
      setRepositories(repositoriesSorted);
    }

    getRepo();
  }, []);

  useEffect(() => {
    const starsCount = repositories.reduce(
      (count, repo) => count + repo.stargazers_count,
      0,
    );
    setStars(starsCount);
  }, [repositories]);

  const showRepositories = () => setToggle(!toggle);

  return (
    <ProfileWrapper>
      <Developer>
        <Divider>
          <Picture src={dev.avatar_url} />
          <Name>{dev.name}</Name>
          <User>@{id}</User>
          <Bio>{dev.bio ? dev.bio : 'No bio'}</Bio>
          <Stats>
            <Info>
              <FiUsers />
              <InfoText>{dev.followers} followers</InfoText>
            </Info>
            <Info>
              <FiHeart />
              <InfoText>{dev.following} following</InfoText>
            </Info>
            <Info>
              <FiStar />
              <InfoText>{stars} stars</InfoText>
            </Info>
          </Stats>
          <InfoList>
            {dev.company && (
              <Info>
                <FaRegBuilding />
                {dev.company}
              </Info>
            )}
            {dev.location && (
              <Info>
                <FiMapPin />
                {dev.location}
              </Info>
            )}
            {dev.email && (
              <Info>
                <FiMail />
                {dev.email}
              </Info>
            )}
            {dev.blog && (
              <Info>
                <FiLink />
                <LinkSite href={dev.blog}>{dev.blog}</LinkSite>
              </Info>
            )}
            {dev.twitter_username && (
              <Info>
                <FiTwitter />
                <LinkSite href={`https://twitter.com/${dev.twitter_username}`}>
                  {dev.twitter_username}
                </LinkSite>
              </Info>
            )}
          </InfoList>
        </Divider>
        <Divider>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button>Voltar</Button>
          </Link>
          <ViewRepo onClick={showRepositories}>View repositories</ViewRepo>
        </Divider>
      </Developer>
      <Repositories>
        <Options>
          <Switch toggleTheme={toggleTheme} />
        </Options>
        {repositories.map((repo) => {
          const lastUpdated = Math.max(
            Date.parse(repo.updated_at),
            Date.parse(repo.pushed_at),
          );
          let dateDiff = Math.floor((Date.now() - lastUpdated) / 8.64e7);
          let period = dateDiff === 1 ? 'day' : 'days';
          if (dateDiff >= 30) {
            dateDiff = Math.floor(dateDiff / 30);
            period = dateDiff === 1 ? 'month' : 'months';
          }
          if (dateDiff >= 12) {
            dateDiff = Math.floor(dateDiff / 12);
            period = dateDiff === 1 ? 'year' : 'years';
          }
          return (
            <Repository key={repo.id}>
              <RepoName href={repo.html_url} target="_blank">
                {repo.name}
              </RepoName>
              <RepoDescription>{repo.description}</RepoDescription>
              <RepoStats>
                <RepoStars>
                  <FiStar />
                  <InfoText>{repo.stargazers_count} stars</InfoText>
                </RepoStars>
                <Dot>&bull;</Dot>
                <RepoUpdated>
                  Updated
                  {` ${dateDiff} ${period} `}
                  ago
                </RepoUpdated>
              </RepoStats>
            </Repository>
          );
        })}
      </Repositories>
    </ProfileWrapper>
  );
};

export default ProfilePage;
