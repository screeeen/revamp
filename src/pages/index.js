import React from "react";
import Layout from "../components/layout";
// import "../fonts/CooperHewitt-Light.otf";
// import "../fonts/HelveticaNeue-Medium.otf";
// import "./index.css";
import SEO from "../components/seo";
import MidMenu from "../components/MidMenu";
import RightMenu from "../components/RightMenu";
import LeftMenu from "../components/LeftMenu";
import { LayoutWrapper } from "../components/styled/styledLayout";
// import styled from "styled-components";

// export const LayoutWrapper = styled.div`
//   margin: 0 auto,
//   maxWidth: '800',
//   padding: 0,
//   overflow: hidden,
//   background-color: blue;
// `;

const IndexPage = () => (
  <LayoutWrapper>
    <Layout>
      <SEO title="Home" />
      <LeftMenu />
      <MidMenu />
      <RightMenu />
    </Layout>
  </LayoutWrapper>
);

export default IndexPage;
