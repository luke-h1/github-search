import React from 'react';
import {
  HeaderWrap,
  Title,
  Icon,
  GithubIcon,
  HeaderLink,
  AboutLink,
  List,
  Unordered,
} from './HeaderEl';

const Header: React.FC = () => (
  <>
    <HeaderWrap>
      <List>
        <Unordered>
          <HeaderLink to="/">
            <Title>Github Searcher</Title>
          </HeaderLink>
        </Unordered>
        <Unordered>
          <AboutLink to="/">
            <Title>About</Title>
          </AboutLink>
        </Unordered>
      </List>

      <Icon to="/">
        <GithubIcon />
      </Icon>
    </HeaderWrap>

  </>
);
export default Header;
