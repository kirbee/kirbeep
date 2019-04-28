import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { H1 } from 'common/H1';

const ProjectsPage = () => (
  <Layout>
    <SEO
      title='About me'
      keywords={['developer', 'web', 'software', 'engineer', 'projects']}
    />
    <H1>projects</H1>
    <p>Sorry! This page is under development. Come back soon!</p>
  </Layout>
);

export default ProjectsPage;
