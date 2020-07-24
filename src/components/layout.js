import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';

import './layout.css';
import VideoBox from './VideoBox';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import Footer from './Footer';

const threeColumns =  {
  display: 'flex',
  flexFlow: 'row nowrap',
  flex: '1 1 1',
  color:'white',
  border: '1px solid #ff00ff'
}



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div style={{ margin: '0 auto', maxWidth: 960, padding: '0 1.0875rem 1.45rem' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <VideoBox url="https://www.youtube.com/watch?v=OSSpVLpuVWA" />
        <main  style={threeColumns}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
