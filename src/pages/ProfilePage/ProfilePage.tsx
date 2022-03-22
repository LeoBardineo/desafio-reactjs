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
  Invalid,
} from './style';
import Switch from '../../components/Switch/Switch';
import periodBetweenDate from '../../util/periodBetweenDate';

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
  size: number;
  stargazers_count: number;
  updated_at: string;
  last_commit: string;
}

const ProfilePage: React.FC<Props> = ({ toggleTheme }): JSX.Element => {
  const [invalidUser, setInvalidUser] = useState(false);
  const [dev, setDev] = useState<Dev>({});
  const [repositories, setRepositories] = useState<Repo[]>([
    {
      stargazers_count: 0,
      size: 0,
      updated_at: '1970-12-01T00:00:00Z',
      last_commit: '1970-12-01T00:00:00Z',
    },
  ]);
  const [stars, setStars] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    async function getDevInfo() {
      const devData = await fetch(`https://api.github.com/users/${id}`);
      const devJson = await devData.json();
      if (devData.status === 404) return setInvalidUser(true);
      return setDev(devJson);
    }

    getDevInfo();
  }, []);

  useEffect(() => {
    async function getRepo() {
      if (!invalidUser) {
        const repoData = await fetch(
          `https://api.github.com/users/${id}/repos`,
        );
        const repoJson = await repoData.json();
        const repositoriesSorted = repoJson.sort((a: Repo, b: Repo) => {
          if (a.stargazers_count > b.stargazers_count) return -1;
          if (a.stargazers_count < b.stargazers_count) return 1;
          return 0;
        });
        const promises: Repo[] = await repositoriesSorted.map(
          async (repo: Repo) => {
            const repoMainBranch = await fetch(
              `https://api.github.com/repos/${id}/${repo.name}/branches/master`,
            );
            const repoMainBranchJson = await repoMainBranch.json();
            return {
              ...repo,
              last_commit: repoMainBranchJson?.commit?.commit?.committer?.date,
            };
          },
        );
        Promise.all(promises).then((data) => setRepositories(data));
      }
    }

    getRepo();
  }, []);

  useEffect(() => {
    if (!invalidUser) {
      const starsCount = repositories.reduce(
        (count, repo) => count + repo.stargazers_count,
        0,
      );
      setStars(starsCount);
    }
  }, [repositories]);

  return invalidUser ? (
    <Invalid>
      <h1>Invalid GitHub username</h1>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button>Voltar</Button>
      </Link>
    </Invalid>
  ) : (
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
          <ViewRepo href="#repositories-section">View repositories</ViewRepo>
        </Divider>
      </Developer>
      <Repositories id="repositories-section">
        <Options>
          <Switch toggleTheme={toggleTheme} />
        </Options>
        {repositories.map((repo) => {
          const [dateDiff, period] = periodBetweenDate(repo.last_commit);
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
                {repo.last_commit && (
                  <>
                    <Dot>&bull;</Dot>
                    <RepoUpdated>
                      Updated
                      {` ${dateDiff} ${period} `}
                      ago
                    </RepoUpdated>
                  </>
                )}
              </RepoStats>
            </Repository>
          );
        })}
      </Repositories>
    </ProfileWrapper>
  );
};

export default ProfilePage;
