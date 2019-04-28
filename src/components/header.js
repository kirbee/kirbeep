import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { H1 } from 'common/H1';
import { UndecoratedLink } from 'common/UndecoratedLink';

const HeaderContainer = styled.header`
  position: sticky;
  text-transform: lowercase;
  z-index: 1000;
  padding: 10px;
  top: 0;
  background-image: linear-gradient(
    to top,
    rgba(13, 29, 62, 0),
    rgba(13, 29, 62, 0.95) 25%
  );
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    padding: 5px;
  }
`;

const TitleWrapper = styled(H1)`
  margin-bottom: 0;
  font-size: 30px;
  color: #f16622;
  z-index: 2;
  margin-bottom: 5px;
  margin-right: 19px;
  color: #fff;
  transition: color 0.15s ease-in-out, margin-right 0.15s ease-in;
`;

const SubtitleWrapper = styled.h4`
  color: #ffc30c;
  font-size: 14px;
  position: absolute;
  right: 0;
  bottom: 0;
  letter-spacing: 1px;
  z-index: 1;
  margin-bottom: 0;
  transition: color 0.15s ease-in-out, letter-spacing 0.15s ease-in;
`;

const HeaderLink = styled(UndecoratedLink)`
  margin-bottom: 0;
  position: relative;
  z-index: unset;
  flex-shrink: 0;

  &:hover ${TitleWrapper} {
    color: #f16622;
    margin-right: 25px;
  }

  &:hover ${SubtitleWrapper} {
    color: #fff;
    letter-spacing: 2px;
  }
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  letter-spacing: 2px;
  color: #ffc30c;
  font-size: 16px;
  padding: 15px;
  transition: color 0.15s ease-in-out, transform 0.2s ease-out;

  &:hover,
  &:focus {
    color: #fff;
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    font-size: 9px;
    letter-spacing: 1px;
    padding: 10px;
  }
`;

const Header = ({ siteTitle, siteSubTitle }) => (
  <HeaderContainer>
    <HeaderLink to='/'>
      <TitleWrapper>{siteTitle}</TitleWrapper>
      <SubtitleWrapper>{siteSubTitle}</SubtitleWrapper>
    </HeaderLink>
    <NavList>
      <HeaderLink to='/about'>
        <NavItem>About</NavItem>
      </HeaderLink>
      <HeaderLink to='/projects'>
        <NavItem>Projects</NavItem>
      </HeaderLink>
      <HeaderLink to='/contact'>
        <NavItem>Contact</NavItem>
      </HeaderLink>
    </NavList>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
