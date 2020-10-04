import React from "react";
import SEO from "../components/seo";
import MidMenu from "../components/MidMenu";
import RightMenu from "../components/RightMenu";
import LeftMenu from "../components/LeftMenu";
import { LayoutWrapper } from "../components/styled/styledLayout";

const IndexPage = () => (
  <LayoutWrapper>
      <SEO title="Home" />
      <LeftMenu />
      <MidMenu />
      <RightMenu />
  </LayoutWrapper>
);

export default IndexPage;
