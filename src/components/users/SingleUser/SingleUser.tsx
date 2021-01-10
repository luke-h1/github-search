/* eslint-disable */
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../layout/Loading';
import Repos from '../../Repos/Repos';
import GithubContext from '../../../context/Github/githubContext';

import {
  SingleLink,
  Tick,
  Cross,
  CardGrid,
  CardWrapContainer,
  Center,
  CenterWrap,
  Badge,
  SingleUserWrap,
  SubTitle,
  FlexWrap,
  List,
  ExtLink,
  StyleP,
  ContainerWrap,
} from './SingleUserEl';
import { StyledImage } from '../UserItem/UserItemEl';

const SingleUser: React.FC = ({ match }: any) => {
  const githubContext = useContext(GithubContext);

  const { getSingleUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getSingleUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Loading />;

  return (
    <>
      <SingleUserWrap>
        <CardWrapContainer>
          <SingleLink to='/'>Back to Home</SingleLink>
          Hireable: {hireable ? <Tick /> : <Cross />}
          <Center>
            <StyledImage src={avatar_url} alt='profile' style={{ width: '150px' }} />
            <h1>{name}</h1>
            <List>
              <p>
                location:{'  '} {location}
              </p>

              {bio && (
                <>
                  <h3>Bio:</h3>
                  <StyleP>{bio}</StyleP>
                </>
              )}
              <li>
                {login && (
                  <>
                    <strong>username: </strong>
                    {login}
                  </>
                )}
              </li>

              <li>
                {company && (
                  <>
                    <strong>company: </strong>
                    {company}
                  </>
                )}
              </li>

              <li>
                {blog && (
                  <>
                    <strong>Website: </strong>
                    {blog}
                  </>
                )}
              </li>
            </List>
          </Center>
          <CenterWrap>
            <ExtLink href={html_url} target='_blank'>
              Visit Github Profile
            </ExtLink>
            <FlexWrap>
              <Badge>
                Followers{'  '}
                {followers}
              </Badge>
              <Badge>
                Following{'  '}
                {following}
              </Badge>
              <Badge>
                Public Repos{'  '}
                {public_repos}
              </Badge>
              <Badge>
                Gists{'  '}
                {public_gists}
              </Badge>
            </FlexWrap>
          </CenterWrap>
          <SubTitle>Recent Projects</SubTitle>
          <Repos repos={repos} />
        </CardWrapContainer>
      </SingleUserWrap>
    </>
  );
};
export default SingleUser;
