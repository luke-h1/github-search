/* eslint-disable camelcase */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import {
  UserWrap,
  UserLink,
  Title,
  BtnWrap,
  UserLinkExternal,
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
        >More Details</UserLink>
       <UserLinkExternal href={`${html_url}`}
            style={{ marginTop: '1rem' }}
        >Github Profile</UserLinkExternal>

        </BtnWrap>
      </UserWrap>
    </>
  );
};
export default UserItem;
