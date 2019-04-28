import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { H1 } from 'common/H1';
import me from 'images/me.jpg';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  height: 300px;
  border: 4px solid #ffc30c;
  order: 1;
  margin: 30px;
  margin-right: 0;

  @media (max-width: 600px) {
    order: 0;
    margin-top: 0;
    margin-right: 30px;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO
      title='About'
      keywords={['developer', 'web', 'software', 'engineer', 'about', 'bio']}
    />
    <H1>about me</H1>
    <Flex>
      <Img src={me} alt='Me wearing sunglasses' />
      <div>
        <p>
          Hi, I'm Kirbee! I'm a biologist/aspiring veterinarian-turned software
          developer currently working in web development.
        </p>
        <p>
          After completing my degree in Biology at UBC in 2011, I worked for a
          few years in animal research (the science-y,
          search-for-the-cure-for-cancer type, not the testing cosmetics on
          animals type) before embarking on an adventure back to school to
          complete second degree in Computer Science, from which I graduated in
          2018.
        </p>
        <p>I have never regretted it.</p>
      </div>
    </Flex>
  </Layout>
);

export default AboutPage;
