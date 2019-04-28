import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem,
  padding-top: 0;
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  margin: 3rem 2rem;
`;

const Footer = styled.footer`
  bottom: 0;
  text-align: center;
  padding: 0.2rem 2rem;
  background-color: #ffc30c;
  font-size: 12px;
  color: #000;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteSubTitle={data.site.siteMetadata.subTitle}
        />
        <Wrapper>
          <Main>{children}</Main>
          <Footer>© {new Date().getFullYear()} Kirbee Parsons</Footer>
        </Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
