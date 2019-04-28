import React, { Component } from 'react';
import { UndecoratedLink } from 'common/UndecoratedLink';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  z-index: 3;
  background-color: transparent;
  border-radius: 3px;
  border-width: 1px;
  ${(p) =>
    p.isOpen
      ? 'color: #0d1d3e; border-color: #0d1d3e; transform: rotate(180deg);'
      : 'color: #ffc30c; border-color: #ffc30c;'};
  outline: none;
  padding: 3px 10px;
  margin-right: 10px;
  transition: color 0.25s ease-in, transform 0.25s ease-in;
`;

const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  right: -${(p) => p.width};
  width: ${(p) => p.width};
  background-color: #ffc30c;
  ${(p) => (p.isOpen ? `transform: translateX(-${p.width});` : '')};
  transition: transform 0.25s ease-in;
  z-index: 2;
  padding: 15px;
  padding-top: 60px;
  border-radius: 0 0 0 3px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  ${(p) => (p.isOpen ? '' : 'display: none;')};
`;

const MobileLink = styled(UndecoratedLink)`
  color: #0d1d3e;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

class MobileNav extends Component {
  defaultProps = {
    width: '300px'
  };

  propTypes = {
    width: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired,
    className: PropTypes.string
  };

  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render = () => {
    const { width, links, className } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <Button
          onClick={this.toggleOpen}
          zIndex={3}
          isOpen={isOpen}
          className={className}
        >
          {'<'}
        </Button>
        <MobileDrawer isOpen={isOpen} width={width}>
          {links.map((link) => (
            <MobileLink to={link.to}>{link.label}</MobileLink>
          ))}
        </MobileDrawer>
        <Overlay onClick={this.toggleOpen} isOpen={isOpen} />
      </>
    );
  };
}

export { MobileNav };
