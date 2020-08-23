import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MidMenu from "../components/MidMenu";
import RightMenu from "../components/RightMenu";
import LeftMenu from "../components/LeftMenu";
import { LayoutWrapper } from "../components/styled/styledLayout";

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
