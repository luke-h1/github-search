import React from 'react';
import {
  HeaderWrap,
  Title,
  Icon,
  GithubIcon,
} from './HeaderEl';

const Header = () => (
  <>
    <HeaderWrap>
      <Title>Github Searcher</Title>
      <Icon>
        <GithubIcon />
      </Icon>
    </HeaderWrap>

  </>
);
export default Header;
