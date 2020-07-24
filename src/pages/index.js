import React from 'react';
import Layout from '../components/layout';
import '../fonts/CooperHewitt-Light.otf';
import '../fonts/HelveticaNeue-Medium.otf';
import './index.css';
import SEO from '../components/seo';
import MidMenu from '../components/MidMenu';
import RightMenu from '../components/RightMenu';
import LeftMenu from '../components/LeftMenu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <LeftMenu />
      <MidMenu />
      <RightMenu />
  </Layout>
);

export default IndexPage;
