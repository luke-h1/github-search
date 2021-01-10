/* eslint-disable camelcase */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { UserWrap, UserLink, Title, BtnWrap, UserLinkExternal,StyledImage } from './UserItemEl';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <>
      <UserWrap>
        <StyledImage src={avatar_url} />
        <Title />
        <BtnWrap>
          <UserLink to={`/user/${login}`}>More Details</UserLink>
          <UserLinkExternal href={`${html_url}`} target='_blank' rel='noreferrer noopener' style={{ marginTop: '1rem' }}>
            Github Profile
          </UserLinkExternal>
        </BtnWrap>
      </UserWrap>
    </>
  );
};
export default UserItem;
