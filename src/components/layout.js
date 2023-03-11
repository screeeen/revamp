import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
// import "./layout.css";
import { GlobalStyle } from "../theme/global-style";
import VideoBox from "./VideoBox";
import Footer from "./Footer";
import { ThreeColumns, Body } from "./styled/styledLayout";

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
      <GlobalStyle />
      <Body>
        <Header />
        {/* <VideoBox url={`https://vimeo.com/99716958`} /> */}
        <ThreeColumns>{children}</ThreeColumns>
        <Footer />
      </Body>
    </>
  );
};

export default Layout;
