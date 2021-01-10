import React from 'react';
import {
  HeaderWrap,
  Title,
  Icon,
  GithubIcon,
  HeaderLink,
} from './HeaderEl';

const Header = () => (
  <>
    <HeaderWrap>
      <HeaderLink to="/">
        <Title>Github Searcher</Title>
      </HeaderLink>
      <Icon>
        <GithubIcon />
      </Icon>
    </HeaderWrap>

  </>
);
export default Header;
