/* eslint-disable camelcase */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import {
  UserWrap,
  UserLink,
  Title,
  BtnWrap,
} from './UserItemEl';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <>
      <UserWrap>
        <img
          src={avatar_url}
          style={{ width: '280px', borderRadius: '10px' }}
        />
        <Title />
        <BtnWrap>
          <UserLink to={`/user/${login}`}
            round='true'
        >Github Profile</UserLink>
        </BtnWrap>
      </UserWrap>
    </>
  );
};
export default UserItem;
