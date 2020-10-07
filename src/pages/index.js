import React from "react";
import SEO from "../components/seo";
import MidMenu from "../components/MidMenu";
import RightMenu from "../components/RightMenu";
import LeftMenu from "../components/LeftMenu";

const IndexPage = () => (
  <>
      <SEO title="Home" />
      <LeftMenu />
      <MidMenu />
      <RightMenu />
  </>
);

export default IndexPage;
