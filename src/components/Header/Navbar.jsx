/* eslint-disable */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';
import NavData from '../../data/nav.json';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavItemBtn, NavLinks, NavBtnLink } from './NavbarElements';

interface NavInt {
  title: any;
  slug: any;
}

const Navbar = props => {
  const [click, setClick] = useState(false);
  const handleClick: Object = () => setClick(!click);
  const closeMobileMenu: Object = () => setClick(false);

  return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              lhowsam
            </NavLogo>
            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {NavData.map(item => (
                <NavItem>
                  <NavLinks to={item.slug} onClick={closeMobileMenu}>
                    {item.title}
                  </NavLinks>
                </NavItem>
              ))}
              <NavItemBtn>
                <NavBtnLink />
              </NavItemBtn>
              <NavItemBtn />
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </>
  );
};

export default Navbar;
