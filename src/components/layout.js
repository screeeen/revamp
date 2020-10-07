import React,{useState} from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
// import "./layout.css";
import { GlobalStyle } from "../theme/global-style";
import VideoBox from "./VideoBox";
import Footer from "./Footer";
import { ThreeColumns } from "./styled/styledLayout";

const Layout = ({children}) => {
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
      <GlobalStyle />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
          // border: '1px solid yellow',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header/>
        {/* <VideoBox url={`https://vimeo.com/99716958`} /> */}
        <ThreeColumns>{children}</ThreeColumns>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
