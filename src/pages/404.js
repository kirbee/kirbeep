import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { H1 } from 'common/H1';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <H1>Not found</H1>
    <p>Oops ... there's nothing here ...</p>
  </Layout>
);

export default NotFoundPage;
