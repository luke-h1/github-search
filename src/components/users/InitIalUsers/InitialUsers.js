/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { Container } from './InitialUsersEl';
import GithubContext from '../../../context/Github/githubContext';
import Loading from '../../layout/Loading';
import UserItem from '../UserItem/UserItem';

const InitialUsers = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users, initUsers } = githubContext;
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
