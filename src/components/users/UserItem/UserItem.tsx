import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    UserWrap,
    UserLink,
    Title, 
} from './UserItemEl';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <>
      <UserWrap>
        <img
          src={avatar_url}
          style={{ width: '60px', borderRadius: '10px' }}
          alt="github user"
        />
        <Title />
        <div>
          <UserLink to={`/user/${login}`}>Github Profile</UserLink>
        </div>
      </UserWrap>
    </>
  );
};
export default UserItem;
