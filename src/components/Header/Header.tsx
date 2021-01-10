import React from 'react';
import {
  HeaderWrap,
  Title,
  Icon,
  GithubIcon,
  HeaderLink,
} from './HeaderEl';

const Header: React.FC = () => (
  <>
    <HeaderWrap>
      <HeaderLink to="/">
        <Title>Github Searcher</Title>
      </HeaderLink>
      <Icon to="/">
        <GithubIcon />
      </Icon>
    </HeaderWrap>

  </>
);
export default Header;
