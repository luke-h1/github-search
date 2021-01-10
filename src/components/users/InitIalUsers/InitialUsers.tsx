import React, { useContext } from 'react';
import { Container } from './InitialUsersEl';
import GithubContext from '../../../context/Github/githubContext';
import Loading from '../../layout/Loading';
import UserItem from '../UserItem/UserItem';

const InitialUsers: React.FC = () => {
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
