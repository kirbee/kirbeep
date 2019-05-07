import React from 'react';
import styled from 'styled-components';
import { PageLink } from 'common/Link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { H1 } from 'common/H1';

const List = styled.ul`
  list-style-type: none;
`;

const ListStart = styled.span`
  font-weight: 600;
  padding-right: 15px;
  color: #f16622;
  display: inline-block;
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['developer', 'web', 'software', 'engineer']} />
    <H1>Hi!</H1>
    <p>
      I'm a software developer specializing in web development. You can find
      some of the things I do listed below.
    </p>
    <p>
      Want to get in touch? <PageLink to='/contact'>Contact me</PageLink>.
    </p>
    <List>
      <li>
        <ListStart>Software/Web:</ListStart> JavaScript (ES6+), React, PHP,
        HTML5, CSS3, Java
      </li>
      <li>
        <ListStart>Tools/Frameworks:</ListStart> CraftCMS, Wordpress,
        Git/GitHub, IntelliJ, VSCode,
      </li>
    </List>
  </Layout>
);

export default IndexPage;
