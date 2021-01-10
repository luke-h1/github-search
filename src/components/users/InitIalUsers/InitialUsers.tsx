import React, { useContext } from 'react';
import axios from 'axios';
import { Container } from './InitialUsersEl';
import GithubContext from '../../../context/Github/githubContext';
import Loading from '../layout/loading';
import UserItem from '../UserItem/UserItem';

const InitialUsers = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Container>
    </>
  );
};
export default InitialUsers;
