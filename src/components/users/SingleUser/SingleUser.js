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
  Center,
  CenterWrap,
  Badge,
  SingleUserWrap,
  List,
  ExtLink,
  StyleP,
  ContainerWrap,
} from './SingleUserEl';

const SingleUser = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const {
    getSingleUser, loading, user, repos, getUserRepos,
  } = githubContext;

  useEffect(() => {
    getSingleUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
    },[])

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
      <SingleLink to="/">Back to Home</SingleLink>
      Hireable:
      {' '}
      {hireable ? (<Tick />) : <Cross />}
      <CardGrid>
        <Center>
          <img
            src={avatar_url}
            alt="profile"
            style={{ width: '150px' }}
          />
        <ContainerWrap>
          <h1>{name}</h1>
          <StyleP>
            location:
            {location}
          </StyleP>
          {bio && (
            <>
              <h3>Bio:</h3>
              <StyleP>{bio}</StyleP>
            </>
          )}
          <List>
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
        </ContainerWrap>
        </Center>
        <CenterWrap>
          <Badge>
            Followers
            {followers}
          </Badge>
          <Badge>
            Following
            {following}
          </Badge>
          <Badge>
            Public Repos
            {public_repos}
          </Badge>
          <Badge>
            Gists
            {public_gists}
          </Badge>
          <ExtLink href={html_url}>
            Visit Github Profile
          </ExtLink>

        </CenterWrap>
      </CardGrid>
      <Repos repos={repos} />
      </SingleUserWrap>
    </>
  );
};
export default SingleUser;
