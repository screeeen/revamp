import React from 'react';

import Layout from '../components/layout';
import '../fonts/CooperHewitt-Light.otf';
import '../fonts/HelveticaNeue-Medium.otf';
import './index.css';
import SEO from '../components/seo';
import RightMenu from '../components/RightMenu';
import LeftMenu from '../components/LeftMenu';
import MidMenu from '../components/MidMenu';
import VideoBox from '../components/VideoBox';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{ display: 'flex', flexFlow: 'column nowrap' }}> */}
    <VideoBox url="https://www.youtube.com/watch?v=OSSpVLpuVWA" />
    <div style={{ display: 'flex' }}>
      <LeftMenu />
      <MidMenu />
      <RightMenu />
    </div>
    {/* </div> */}
  </Layout>
);

export default IndexPage;
