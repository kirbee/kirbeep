import React from 'react';
import { A } from 'common/Link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { H1 } from 'common/H1';

const ContactPage = () => (
  <Layout>
    <SEO
      title='Contact'
      keywords={[
        'developer',
        'web',
        'software',
        'engineer',
        'contact',
        'social media'
      ]}
    />
    <H1>contact</H1>
    <p>
      You can email me at{' '}
      <A href='mailto:kirbee.parsons@gmail.com'>kirbee.parsons[at]gmail.com</A>.
    </p>
  </Layout>
);

export default ContactPage;
